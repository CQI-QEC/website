use axum::{
    http::StatusCode,
    routing::{delete, get, patch},
    Router,
};

use crate::SharedState;

pub mod delete_participant;
pub mod get_participants;
pub mod new_participant;
pub mod patch_participant;

pub fn api_router(state: SharedState) -> Router {
    Router::new().nest("/api", api_handler(state))
}

fn api_handler(state: SharedState) -> Router {
    Router::new()
        .route("/health", get(|| async { (StatusCode::OK, "OK") }))
        .route(
            "/participant",
            patch(patch_participant::patch_participant).post(new_participant::new_participant),
        )
        .route(
            "/participant/:id",
            delete(delete_participant::delete_participant),
        )
        .route("/participants", get(get_participants::get_participants))
        .with_state(state)
}
