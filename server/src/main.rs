use std::{net::SocketAddr, time::Duration};

use axum::extract::DefaultBodyLimit;
use axum::http::{
    header::{ACCEPT, AUTHORIZATION, CONTENT_TYPE},
    Method,
};
use backend_cqi::Result;
use backend_cqi::{routes::api_router, AppState};
use tower_http::{
    compression::{predicate::SizeAbove, CompressionLayer},
    cors::CorsLayer,
    trace::TraceLayer,
    CompressionLevel,
};
use tracing_subscriber::EnvFilter;

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv()?;

    tracing_subscriber::fmt()
        .compact()
        .with_env_filter(EnvFilter::from_default_env())
        .init();

    let state = AppState::new().await?;
    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));

    let router = api_router(state.clone());

    tracing::debug!("listening on {}", addr);

    let listener = tokio::net::TcpListener::bind(&addr).await?;

    let cors_layer = CorsLayer::new()
        .allow_headers([ACCEPT, CONTENT_TYPE, AUTHORIZATION])
        .max_age(Duration::from_secs(86400))
        .allow_origin(tower_http::cors::Any)
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
            .layer(DefaultBodyLimit::max(32 * 1024 * 1024))
            .into_make_service(),
    )
    .await?;

    Ok(())
}
