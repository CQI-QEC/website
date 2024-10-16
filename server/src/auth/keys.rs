/// Strongly inspired by https://www.shuttle.dev/blog/2024/02/21/using-jwt-auth-rust
use jsonwebtoken::{DecodingKey, EncodingKey};

pub struct Keys {
    pub encoding: EncodingKey,
    pub decoding: DecodingKey,
}

impl Keys {
    pub fn new(secret: &[u8]) -> Self {
        Self {
            encoding: EncodingKey::from_secret(secret),
            decoding: DecodingKey::from_secret(secret),
        }
    }
}
