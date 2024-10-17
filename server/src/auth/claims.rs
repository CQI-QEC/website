use crate::model::role::Role;
use argon2::{password_hash::PasswordVerifier, Argon2, PasswordHash};
use axum::{async_trait, extract::FromRequestParts, http::request::Parts, RequestPartsExt};
use axum_extra::{
    headers::{authorization::Bearer, Authorization},
    TypedHeader,
};
use chrono::Utc;
use jsonwebtoken::{decode, Validation};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use uuid::Uuid;

use crate::KEYS;

use super::auth_error::AuthError;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub id: Uuid,
    pub role: Role,
    pub university: String,
    pub exp: usize,
}

impl Claims {
    pub async fn new(email: String, password: String, db: &PgPool) -> Option<Self> {
        let user = sqlx::query!(
            r#"SELECT id, role AS "role: Role", password_hash, university_name FROM participants WHERE email = $1"#,
            email
        )
        .fetch_one(db)
        .await
        .ok()?;

        let argon2 = Argon2::default();
        let password_hash = PasswordHash::new(&user.password_hash).ok()?;

        if argon2
            .verify_password(password.as_bytes(), &password_hash)
            .is_err()
        {
            return None;
        }

        let id = user.id;
        let role = user.role;
        let university = user.university_name.unwrap_or("".to_string());
        let exp = (Utc::now().naive_utc() + chrono::naive::Days::new(1))
            .and_utc()
            .timestamp() as usize;
        Some(Self {
            id,
            role,
            university,
            exp,
        })
    }
}

#[async_trait]
impl<S> FromRequestParts<S> for Claims
where
    S: Send + Sync,
{
    type Rejection = AuthError;

    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        // Extract the token from the authorization header
        let TypedHeader(Authorization(bearer)) = parts
            .extract::<TypedHeader<Authorization<Bearer>>>()
            .await
            .map_err(|_| AuthError::InvalidToken)?;
        // Decode the user data
        let token_data = decode::<Claims>(bearer.token(), &KEYS.decoding, &Validation::default())
            .map_err(|_| AuthError::InvalidToken)?;

        Ok(token_data.claims)
    }
}
