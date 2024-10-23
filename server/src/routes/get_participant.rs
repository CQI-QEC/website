use axum::extract::{Path, State};
use axum::http::StatusCode;
use axum::response::IntoResponse;
use axum::Json;
use uuid::Uuid;

use crate::model::participant::Participant;
use crate::{auth::claims::Claims, model::role::Role, SharedState};

pub async fn get_participant(
    claims: Claims,
    State(state): State<SharedState>,
    Path(id): Path<Uuid>,
) -> impl IntoResponse {
    match claims.role {
        Role::Organizer | Role::Volunteer => {
            match Participant::get_participant(id, &state.db).await {
                Ok(participant) => (StatusCode::OK, Json(participant)).into_response(),
                Err(e) => {
                    tracing::error!("Failed to get participant: {}", e);
                    (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
                }
            }
        }
        Role::Chef => {
            match Participant::get_participant_with_university(id, claims.university, &state.db)
                .await
            {
                Ok(participant) => (StatusCode::OK, Json(participant)).into_response(),
                Err(e) => {
                    tracing::error!("Failed to get participant: {}", e);
                    (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
                }
            }
        }
        Role::Participant => {
            if id == claims.id {
                match Participant::get_participant(id, &state.db).await {
                    Ok(participant) => (StatusCode::OK, Json(participant)).into_response(),
                    Err(e) => {
                        tracing::error!("Failed to get participant: {}", e);
                        (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
                    }
                }
            } else {
                (StatusCode::FORBIDDEN, "Forbidden").into_response()
            }
        }
    }
}
