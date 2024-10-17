use axum::{extract::State, Json};
use jsonwebtoken::{encode, Header};
use serde::Deserialize;

use crate::{
    auth::{auth_body::AuthBody, auth_error::AuthError, claims::Claims},
    SharedState, KEYS,
};

#[derive(Debug, Deserialize)]
pub struct AuthPayload {
    email: String,
    password: String,
}

pub async fn login(
    State(state): State<SharedState>,
    Json(payload): Json<AuthPayload>,
) -> Result<Json<AuthBody>, AuthError> {
    if payload.email.is_empty() || payload.password.is_empty() {
        return Err(AuthError::MissingCredentials);
    }

    let Some(claims) = Claims::new(payload.email, payload.password, &state.db).await else {
        return Err(AuthError::WrongCredentials);
    };

    let token = encode(&Header::default(), &claims, &KEYS.encoding)
        .map_err(|_| AuthError::TokenCreation)?;

    Ok(Json(AuthBody::new(token)))
}
