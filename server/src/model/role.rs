use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(Copy, Clone, Debug, Serialize, Deserialize, PartialEq, Eq, sqlx::Type, TS)]
#[serde(rename_all = "snake_case")]
#[sqlx(rename_all = "snake_case", type_name = "ROLE")]
#[ts(export)]
pub enum Role {
    Organizer,
    Volunteer,
    Chef,
    Participant,
}
