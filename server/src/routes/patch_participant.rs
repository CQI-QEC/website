use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};

use crate::{auth::claims::Claims, model::participant_info::ParticipantInfo, SharedState};

pub async fn patch_participant(
    claims: Claims,
    State(state): State<SharedState>,
    Json(participant): Json<ParticipantInfo>,
) -> impl IntoResponse {
    match participant.write_to_database(claims.id, &state.db).await {
        Ok(_) => (StatusCode::CREATED, "Participant created".to_string()),
        Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()),
    }
}
