use axum::{
    http::StatusCode,
    routing::{get, patch},
    Router,
};

use crate::SharedState;

pub mod get_participants;
pub mod patch_participant;

pub fn api_router(state: SharedState) -> Router {
    Router::new().nest("/api", api_handler(state))
}

fn api_handler(state: SharedState) -> Router {
    Router::new()
        .route("/health", get(|| async { (StatusCode::OK, "OK") }))
        .route(
            "/new_participant",
            patch(patch_participant::patch_participant),
        )
        .with_state(state)
}
