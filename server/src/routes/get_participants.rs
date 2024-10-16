use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};

use crate::{model::participant::Participant, SharedState};

pub async fn get_participants(State(state): State<SharedState>) -> impl IntoResponse {
    match Participant::get_participants(&state.db).await {
        Ok(participants) => (StatusCode::OK, Json(participants)).into_response(),
        Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response(),
    }
}
