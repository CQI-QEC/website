use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, sqlx::Type)]
#[sqlx(rename_all = "snake_case", type_name = "role")]
pub enum Role {
    Organizer,
    Volunteer,
    Chef,
    Participant,
}
