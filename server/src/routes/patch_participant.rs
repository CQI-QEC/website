use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};

use crate::{model::participant::Participant, SharedState};

pub async fn patch_participant(
    State(state): State<SharedState>,
    Json(participant): Json<Participant>,
) -> impl IntoResponse {
    match participant.write_to_database(&state.db).await {
        Ok(_) => (StatusCode::CREATED, "Participant created".to_string()),
        Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()),
    }
}
