use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use serde::Deserialize;
use ts_rs::TS;

use crate::{auth::claims::Claims, SharedState};

#[derive(Deserialize, TS)]
#[ts(export)]
pub struct EmailResetPayload {
    email: String,
}

pub async fn send_email_reset(
    State(state): State<SharedState>,
    Json(email): Json<EmailResetPayload>,
) -> impl IntoResponse {
    let Some(claims) =
        Claims::create_token_for_password_reset(email.email.clone(), &state.db).await
    else {
        return (StatusCode::BAD_REQUEST, "Email not found".to_string()).into_response();
    };
    if let Err(e) = state
        .email
        .lock()
        .await
        .send_email(
            "Changement de mot de passe CQI/QEC 2025 password reinitalization",
            format!(
                r#"Bonjour,
Un changement de mot de passe a été demandé pour le compte associé à ce courriel.
Pour changer votre mot de passe, cliquez sur le lien suivant :

A password change has been requested for the account associated with this email.
To change your password, click on the following link:

https://cqi-qec.qc.ca/change-password/{}"#,
                claims
            ),
            &email.email,
        )
        .await
    {
        return (StatusCode::BAD_REQUEST, e.to_string()).into_response();
    };
    (StatusCode::OK, "Email sent".to_string()).into_response()
}
