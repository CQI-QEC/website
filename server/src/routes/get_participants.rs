use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};

use crate::{
    auth::claims::Claims,
    model::{preview_participant::ParticipantPreview, role::Role},
    SharedState,
};

pub async fn get_participants(
    claims: Claims,
    State(state): State<SharedState>,
) -> impl IntoResponse {
    match claims.role {
        Role::Organizer | Role::Volunteer => {
            match ParticipantPreview::get_participants(&state.db).await {
                Ok(participants) => return (StatusCode::OK, Json(participants)).into_response(),
                Err(e) => {
                    tracing::error!("Failed to get participants: {}", e);
                    return (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response();
                }
            }
        }
        Role::Chef => {
            match ParticipantPreview::get_participants_from_university(&state.db, claims.university)
                .await
            {
                Ok(participants) => return (StatusCode::OK, Json(participants)).into_response(),
                Err(e) => {
                    tracing::error!("Failed to get participants: {}", e);
                    return (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response();
                }
            }
        }
        Role::Participant => return (StatusCode::FORBIDDEN, "Forbidden").into_response(),
    }
}
