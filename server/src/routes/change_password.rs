use axum::extract::State;
use axum::http::StatusCode;
use axum::response::IntoResponse;
use axum::Json;
use serde::Deserialize;
use ts_rs::TS;

use crate::auth::claims::Claims;
use crate::model::participant_info::ParticipantInfo;
use crate::SharedState;

#[derive(Deserialize, TS)]
#[ts(export)]
pub struct ChangePasswordPayload {
    pub new_password: String,
}

pub async fn change_password(
    claims: Claims,
    State(state): State<SharedState>,
    Json(password): Json<ChangePasswordPayload>,
) -> impl IntoResponse {
    match ParticipantInfo::change_password(claims.id, password.new_password, &state.db).await {
        Ok(_) => (StatusCode::OK, "Password changed".to_string()),
        Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()),
    }
}
