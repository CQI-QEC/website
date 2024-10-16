use serde::{Deserialize, Serialize};

#[derive(Copy, Clone, Debug, Serialize, Deserialize, sqlx::Type)]
#[serde(rename_all = "snake_case")]
#[sqlx(rename_all = "snake_case", type_name = "ROLE")]
pub enum Role {
    Organizer,
    Volunteer,
    Chef,
    Participant,
}
