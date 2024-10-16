use serde::{Deserialize, Serialize};
use serde_with::{base64::Base64, base64::Standard, formats::Padded, serde_as};
use sqlx::PgPool;
use uuid::Uuid;

use super::role::Role;

#[serde_as]
#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
pub struct Participant {
    pub id: Uuid,
    pub role: Role,
    pub university_name: String,
    pub medical_conditions: String,
    pub allergies: String,
    pub pronouns: String,
    pub competition: String,
    pub phone_number: String,
    pub tshirt_size: String,
    pub comments: String,
    pub emergency_contact: String,
    pub has_monthly_opus_card: bool,
    pub reduced_mobility: String,
    #[serde_as(as = "Base64<Standard, Padded>")]
    pub study_proof: Vec<u8>,
    #[serde_as(as = "Base64<Standard, Padded>")]
    pub photo: Vec<u8>,
    #[serde_as(as = "Base64<Standard, Padded>")]
    pub cv: Vec<u8>,
}

impl Participant {
    pub async fn get_participants(db: &PgPool) -> Result<Vec<Self>, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants")
            .fetch_all(db)
            .await
    }

    pub async fn get_participants_from_university(
        db: &PgPool,
        university: &str,
    ) -> Result<Vec<Self>, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants WHERE university_name = $1")
            .bind(university)
            .fetch_all(db)
            .await
    }

    pub async fn get_participant(db: &PgPool) -> Result<Self, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants WHERE id = $1")
            .bind(Uuid::new_v4())
            .fetch_one(db)
            .await
    }

    // pub async fn read_from_database(uid: &str) -> Self {}

    pub async fn write_to_database(&self, db: &PgPool) -> Result<(), sqlx::Error> {
        sqlx::query!(
                r#"INSERT INTO participants (id, university_name, medical_conditions, allergies, pronouns, competition, phone_number, tshirt_size, study_proof, photo, cv, comments, emergency_contact, has_monthly_opus_card, reduced_mobility)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)"#,
                self.id,
                self.university_name,
                self.medical_conditions,
                self.allergies,
                self.pronouns,
                self.competition,
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
}
