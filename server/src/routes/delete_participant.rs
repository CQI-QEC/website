use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::IntoResponse,
};
use uuid::Uuid;

use crate::{
    auth::claims::Claims,
    model::{participant::Participant, role::Role},
    SharedState,
};

pub async fn delete_participant(
    claims: Claims,
    State(state): State<SharedState>,
    Path(id): Path<Uuid>,
) -> impl IntoResponse {
    match claims.role {
        Role::Volunteer | Role::Participant => {
            return (StatusCode::FORBIDDEN, "Forbidden").into_response()
        }
        _ => {}
    }
    match Participant::delete_from_database(id, &state.db).await {
        Ok(_) => (StatusCode::CREATED, "Participant deleted".to_string()).into_response(),
        Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response(),
    }
}
