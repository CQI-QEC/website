use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::IntoResponse,
};
use uuid::Uuid;

use crate::{model::participant::Participant, SharedState};

pub async fn delete_participant(
    State(state): State<SharedState>,
    Path(id): Path<Uuid>,
) -> impl IntoResponse {
    match Participant::delete_from_database(id, &state.db).await {
        Ok(_) => (StatusCode::CREATED, "Participant deleted".to_string()),
        Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()),
    }
}
