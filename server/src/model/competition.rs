use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(Copy, Clone, Debug, Serialize, Deserialize, sqlx::Type, TS)]
#[serde(rename_all = "snake_case")]
#[sqlx(rename_all = "snake_case", type_name = "COMPETITION")]
#[ts(export)]
pub enum Competition {
    ConceptionSenior,
    ConceptionJunior,
    DebatsOratoires,
    Reingenierie,
    GenieConseil,
    CommunicationScientifique,
    Programmation,
    ConceptionInnovatrice,
    CycleSuperieur,
    None,
}
