use argon2::{password_hash::SaltString, Argon2, PasswordHasher};
use rand::rngs::OsRng;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use ts_rs::TS;
use uuid::Uuid;

use super::{competition::Competition, role::Role};
use crate::utility::{deserialize_base64, serialize_base64};

#[derive(Debug, Serialize, Deserialize, sqlx::FromRow, TS)]
#[ts(export)]
pub struct Participant {
    pub id: Uuid,
    pub role: Role,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub university: Option<String>,
    pub medical_conditions: Option<String>,
    pub allergies: Option<String>,
    pub pronouns: Option<String>,
    pub competition: Option<Competition>,
    pub phone_number: Option<String>,
    pub tshirt_size: Option<String>,
    pub comments: Option<String>,
    pub emergency_contact: Option<String>,
    pub has_monthly_opus_card: Option<bool>,
    pub reduced_mobility: Option<String>,
    #[serde(
        serialize_with = "serialize_base64",
        deserialize_with = "deserialize_base64"
    )]
    #[ts(type = "string")]
    pub study_proof: Option<Vec<u8>>,
    #[serde(
        serialize_with = "serialize_base64",
        deserialize_with = "deserialize_base64"
    )]
    #[ts(type = "string")]
    pub photo: Option<Vec<u8>>,
    #[serde(
        serialize_with = "serialize_base64",
        deserialize_with = "deserialize_base64"
    )]
    #[ts(type = "string")]
    pub cv: Option<Vec<u8>>,
}

impl Participant {
    pub async fn get_participant(db: &PgPool) -> Result<Self, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants WHERE id = $1")
            .bind(Uuid::new_v4())
            .fetch_one(db)
            .await
    }

    pub async fn write_to_database(&self, db: &PgPool) -> Result<(), sqlx::Error> {
        sqlx::query!(
                r#"INSERT INTO participants (id, university, medical_conditions, allergies, pronouns, competition, phone_number, tshirt_size, study_proof, photo, cv, comments, emergency_contact, has_monthly_opus_card, reduced_mobility)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)"#,
                self.id,
                self.university,
                self.medical_conditions,
                self.allergies,
                self.pronouns,
                self.competition as Option<Competition>,
                self.phone_number,
                self.tshirt_size,
                self.study_proof,
                self.photo,
                self.cv,
                self.comments,
                self.emergency_contact,
                self.has_monthly_opus_card,
                self.reduced_mobility
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

    pub async fn delete_from_database_university(
        id: Uuid,
        university: String,
        db: &PgPool,
    ) -> Result<(), sqlx::Error> {
        sqlx::query!(
            r#"DELETE FROM participants WHERE id = $1 AND university = $2"#,
            id,
            university
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
