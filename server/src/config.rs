#[derive(Debug, Clone)]
pub struct OauthConfig {
    pub client_id: String,
    pub client_secret: String,
    pub tenant_id: String,
    pub user_id: String,
}

impl OauthConfig {
    pub fn from_env() -> Self {
        let client_id = std::env::var("CLIENT_ID").unwrap();
        let client_secret = std::env::var("CLIENT_SECRET").unwrap();
        let tenant_id = std::env::var("TENANT_ID").unwrap();
        let user_id = std::env::var("USER_ID").unwrap();
        Self {
            client_id,
            client_secret,
            tenant_id,
            user_id,
        }
    }
}

pub struct Config {
    pub database_url: String,
}

impl Config {
    pub fn from_env() -> Self {
        let database_url = std::env::var("DATABASE_URL").unwrap();
        Self { database_url }
    }
}
