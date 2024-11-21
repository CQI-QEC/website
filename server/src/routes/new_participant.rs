use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use rand::distributions::{Alphanumeric, DistString};

use crate::{
    auth::claims::Claims,
    model::{minimal_participant::MinimalParticipant, role::Role},
    SharedState,
};

pub async fn new_participant(
    claims: Claims,
    State(state): State<SharedState>,
    Json(participant): Json<MinimalParticipant>,
) -> impl IntoResponse {
    let password = Alphanumeric.sample_string(&mut rand::thread_rng(), 16);

    if claims.role == Role::Volunteer || claims.role == Role::Participant {
        return (StatusCode::FORBIDDEN, "Forbidden").into_response();
    }

    if claims.role == Role::Chef
    // && ((participant.role == Role::Organizer || participant.role == Role::Volunteer)
    // || participant.university != claims.university)
    {
        return (StatusCode::FORBIDDEN, "Forbidden").into_response();
    }

    if let Err(e) = state
        .email
        .lock()
        .await
        .send_email(
            "Inscription CQI/QEC 2025",
            format!(
                r#"Bienvenue {} {},
Vous avez été inscrit à la compétition CQI/QEC 2025.
Votre courriel est : {}
Votre mot de passe est : {}
Vous pouvez vous connecter à l'adresse suivante :
https://cqi-qec.qc.ca/login

Welcome {} {},
You have been registered for the CQI/QEC 2025 competition.
Your email is : {}
Your password is : {}
You can log in at the following address :
https://cqi-qec.qc.ca/login"#,
                &participant.first_name,
                &participant.last_name,
                &participant.email,
                &password,
                &participant.first_name,
                &participant.last_name,
                &participant.email,
                &password
            ),
            &participant.email,
        )
        .await
    {
        return (StatusCode::BAD_REQUEST, e.to_string()).into_response();
    };

    if let Err(e) = participant.write_to_database(&password, &state.db).await {
        return (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response();
    };

    (StatusCode::CREATED, "Participant created".to_string()).into_response()
}
