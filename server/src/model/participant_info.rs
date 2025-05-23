use argon2::{password_hash::SaltString, Argon2, PasswordHasher};
use rand::rngs::OsRng;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use ts_rs::TS;
use uuid::Uuid;

use crate::utility::{deserialize_base64, serialize_base64};

use super::{
    competition::Competition, dietary_restriction::DietaryRestriction, role::Role,
    tshirt_size::TshirtSize, university::University,
};

#[derive(Debug, Serialize, Deserialize, sqlx::FromRow, TS)]
#[ts(export)]
pub struct ParticipantInfo {
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub email: Option<String>,
    pub role: Option<Role>,
    pub food_forms_completed: Option<bool>,
    pub competition: Option<Competition>,
    pub university: Option<University>,
    pub medical_conditions: Option<String>,
    pub allergies: Option<String>,
    pub pronouns: Option<String>,
    pub supper: Option<String>,
    pub phone_number: Option<String>,
    pub tshirt_size: Option<TshirtSize>,
    pub comments: Option<String>,
    pub dietary_restrictions: Option<DietaryRestriction>,
    pub emergency_contact_name: Option<String>,
    pub emergency_contact_phone: Option<String>,
    pub emergency_contact_relationship: Option<String>,
    pub has_monthly_opus_card: Option<bool>,
    pub reduced_mobility: Option<String>,
    #[serde(
        serialize_with = "serialize_base64",
        deserialize_with = "deserialize_base64"
    )]
    #[ts(type = "File")]
    pub study_proof: Option<Vec<u8>>,
    #[serde(
        serialize_with = "serialize_base64",
        deserialize_with = "deserialize_base64"
    )]
    #[ts(type = "File")]
    pub photo: Option<Vec<u8>>,
    #[serde(
        serialize_with = "serialize_base64",
        deserialize_with = "deserialize_base64"
    )]
    #[ts(type = "File")]
    pub cv: Option<Vec<u8>>,
}

impl ParticipantInfo {
    pub async fn get_participant(id: Uuid, db: &PgPool) -> Result<Self, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants WHERE id = $1")
            .bind(id)
            .fetch_one(db)
            .await
    }

    pub async fn get_participant_with_university(
        id: Uuid,
        university: University,
        db: &PgPool,
    ) -> Result<Self, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants WHERE id = $1 AND university = $2")
            .bind(id)
            .bind(university)
            .fetch_one(db)
            .await
    }

    pub async fn write_to_database(&self, id: Uuid, db: &PgPool) -> Result<(), sqlx::Error> {
        sqlx::query!(
                r#"UPDATE participants SET (food_forms_completed, medical_conditions, allergies, pronouns, phone_number, tshirt_size, comments, dietary_restrictions, emergency_contact_name, emergency_contact_phone, emergency_contact_relationship, has_monthly_opus_card, reduced_mobility, study_proof, photo, cv)
                = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) WHERE id = $17"#,
                self.food_forms_completed,
                self.medical_conditions,
                self.allergies,
                self.pronouns,
                self.phone_number,
                self.tshirt_size as Option<TshirtSize>,
                self.comments,
                self.dietary_restrictions as Option<DietaryRestriction>,
                self.emergency_contact_name,
                self.emergency_contact_phone,
                self.emergency_contact_relationship,
                self.has_monthly_opus_card,
                self.reduced_mobility,
                self.study_proof,
                self.photo,
                self.cv,
                id
            )
            .execute(db)
            .await?;
        Ok(())
    }

    pub async fn delete_from_database(id: Uuid, db: &PgPool) -> Result<(), sqlx::Error> {
        sqlx::query!(r#"DELETE FROM participants WHERE id = $1"#, id)
            .execute(db)
            .await?;
        Ok(())
    }

    pub async fn delete_from_database_with_university(
        id: Uuid,
        university: University,
        db: &PgPool,
    ) -> Result<(), sqlx::Error> {
        sqlx::query!(
            r#"DELETE FROM participants WHERE id = $1 AND university = $2"#,
            id,
            university as University
        )
        .execute(db)
        .await?;
        Ok(())
    }

    pub async fn change_password(
        id: Uuid,
        password: String,
        db: &PgPool,
    ) -> Result<(), sqlx::Error> {
        let salt = SaltString::generate(&mut OsRng);
        let argon2 = Argon2::default();
        let password_hash = argon2
            .hash_password(password.as_bytes(), &salt)
            .unwrap()
            .to_string();
        sqlx::query!(
            "UPDATE participants SET password_hash = $1 WHERE id = $2",
            password_hash,
            id
        )
        .execute(db)
        .await?;
        Ok(())
    }
}
