use serde::{Deserialize, Serialize};
use serde_with::{base64::Base64, base64::Standard, formats::Padded, serde_as};
use sqlx::PgPool;
use uuid::Uuid;

#[serde_as]
#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
pub struct ParticipantInfo {
    pub id: Uuid,
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

impl ParticipantInfo {
    pub async fn get_all_participants(conn: &PgPool) -> Result<Vec<Self>, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants")
            .fetch_all(conn)
            .await
    }

    // pub async fn read_from_database(uid: &str) -> Self {}

    pub async fn write_to_database(&self, conn: &PgPool) -> Result<(), sqlx::Error> {
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
            .execute(conn)
            .await?;
        Ok(())
    }
}
