use std::{
    net::SocketAddr,
    sync::{Arc, LazyLock},
    time::Duration,
};

use auth::keys::Keys;
use axum::http::{
    header::{ACCEPT, CONTENT_TYPE},
    HeaderValue, Method,
};
use config::Config;
use rand::distributions::Alphanumeric;
use rand::distributions::DistString;
use routes::api_router;
use sqlx::PgPool;
use tower_http::{
    compression::{predicate::SizeAbove, CompressionLayer},
    cors::CorsLayer,
    trace::TraceLayer,
    CompressionLevel,
};
use tracing_subscriber::EnvFilter;

pub type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

pub type SharedState = Arc<AppState>;

pub mod auth;
pub mod config;
pub mod model;
pub mod routes;
pub mod utility;

static KEYS: LazyLock<Keys> = LazyLock::new(|| {
    let secret = Alphanumeric.sample_string(&mut rand::thread_rng(), 60);
    Keys::new(secret.as_bytes())
});

#[derive(Clone)]
pub struct AppState {
    db: PgPool,
}

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv()?;

    let config = Config::from_env();
    tracing_subscriber::fmt()
        .compact()
        .with_env_filter(EnvFilter::from_default_env())
        .init();

    let db = PgPool::connect(&config.database_url).await?;

    let state = Arc::new(AppState { db });
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

    let router = api_router(Arc::clone(&state));

    tracing::debug!("listening on {}", addr);

    let listener = tokio::net::TcpListener::bind(&addr).await?;

    let cors_layer = CorsLayer::new()
        .allow_headers([ACCEPT, CONTENT_TYPE])
        .max_age(Duration::from_secs(86400))
        .allow_origin(
            std::env::var("CORS_ORIGIN")
                .unwrap_or_else(|_| "*".to_string())
                .parse::<HeaderValue>()?,
        )
        .allow_methods(vec![
            Method::GET,
            Method::POST,
            Method::PUT,
            Method::DELETE,
            Method::OPTIONS,
            Method::HEAD,
            Method::PATCH,
        ]);

    let compression_layer = CompressionLayer::new()
        .quality(CompressionLevel::Precise(4))
        .compress_when(SizeAbove::new(512));

    axum::serve(
        listener,
        router
            .layer(cors_layer)
            .layer(compression_layer)
            .layer(TraceLayer::new_for_http())
            .into_make_service(),
    )
    .await?;

    Ok(())
}
