use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(Copy, Clone, Debug, Serialize, Deserialize, PartialEq, Eq, sqlx::Type, TS)]
#[serde(rename_all = "snake_case")]
#[sqlx(rename_all = "snake_case", type_name = "UNIVERSITY")]
#[ts(export)]
pub enum University {
    Uqac,
    Uqar,
    Uqat,
    Uqo,
    Uqtr,
    Mcgill,
    McgillMacdonald,
    Concordia,
    Ets,
    Polymtl,
    Ulaval,
    UlavalAgriculture,
    Uds,
    None,
}
