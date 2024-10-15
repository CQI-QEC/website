use std::sync::Arc;

use axum::{http::StatusCode, routing::get, Router};

use crate::AppState;

pub mod new_participant;

pub fn api_router(state: Arc<AppState>) -> Router {
    Router::new().nest("/api", api_handler(state))
}

fn api_handler(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/health", get(|| async { (StatusCode::OK, "OK") }))
        .with_state(state)
}
