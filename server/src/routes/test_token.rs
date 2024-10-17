use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};

use crate::{auth::claims::Claims, model::role::Role};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AuthResponse {
    pub role: Role,
}

pub async fn test_token(claims: Claims) -> impl IntoResponse {
    let auth = AuthResponse { role: claims.role };
    (StatusCode::OK, Json(auth))
}
