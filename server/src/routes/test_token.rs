use axum::{http::StatusCode, response::IntoResponse, Json};

use crate::auth::claims::Claims;

pub async fn test_token(claims: Claims) -> impl IntoResponse {
    (StatusCode::OK, Json(claims)).into_response()
}
