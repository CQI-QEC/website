use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(Copy, Clone, Debug, Serialize, Deserialize, sqlx::Type, TS)]
#[serde(rename_all = "snake_case")]
#[sqlx(rename_all = "snake_case", type_name = "DIETARY_RESTRICTION")]
#[ts(export)]
pub enum DietaryRestriction {
    None,
    Vegetarian,
    Vegan,
    Halal,
    Other,
}
