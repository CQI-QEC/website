use axum::{
    http::StatusCode,
    routing::{delete, get, patch, post, put},
    Router,
};

use crate::SharedState;

pub mod change_password;
pub mod delete_participant;
pub mod get_participant;
pub mod get_participants;
pub mod login;
pub mod new_participant;
pub mod patch_participant;
pub mod test_token;

pub fn api_router(state: SharedState) -> Router {
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
        .route("/login", post(login::login))
        .route("/test", get(test_token::test_token))
        .route("/password", put(change_password::change_password))
        .with_state(state)
}
