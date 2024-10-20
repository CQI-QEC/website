use std::sync::{Arc, LazyLock};

use auth::keys::Keys;
use config::Config;
use email::EmailClient;
use rand::distributions::{Alphanumeric, DistString};
use sqlx::PgPool;
use tokio::sync::Mutex;

#[derive(Debug)]
pub struct AppState {
    pub db: PgPool,
    pub email: Mutex<EmailClient>,
}

impl AppState {
    pub async fn new() -> Result<SharedState> {
        let config = Config::from_env();
        let db = PgPool::connect(&config.database_url).await?;
        let email = Mutex::new(EmailClient::new().await);
        Ok(Arc::new(Self { db, email }))
    }
}

pub type SharedState = Arc<AppState>;

pub type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

static KEYS: LazyLock<Keys> = LazyLock::new(|| {
    let secret = Alphanumeric.sample_string(&mut rand::thread_rng(), 60);
    Keys::new(secret.as_bytes())
});

pub mod auth;
pub mod config;
pub mod email;
pub mod model;
pub mod routes;
pub mod utility;
