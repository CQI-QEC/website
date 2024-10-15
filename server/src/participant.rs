// write an html and tailwind forms for getting these fields
// firstName, lastName, medicalConditions, pronouns, universityName, competition, companyName, email, phoneNumber, tshirtSize, allergies, proofStudies, photo, cv, comments, study proof, emergency contact, has monthly opus card
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
pub struct Participant {
    pub id: Uuid,
    pub first_name: String,
    pub last_name: String,
    pub university_name: String,
    pub medical_conditions: String,
    pub allergies: String,
    pub pronouns: String,
    pub competition: String,
    pub email: String,
    pub phone_number: String,
    pub tshirt_size: String,
    pub study_proof: Vec<u8>,
    pub photo: Vec<u8>,
    pub cv: Vec<u8>,
    pub comments: String,
    pub emergency_contact: String,
    pub has_monthly_opus_card: bool,
    pub reduced_mobility: String,
}

impl Participant {
    pub async fn get_all_participants(conn: &PgPool) -> Result<Vec<Self>, sqlx::Error> {
        sqlx::query_as("SELECT * FROM participants")
            .fetch_all(conn)
            .await
    }

    // pub async fn read_from_database(uid: &str) -> Self {}

    pub async fn write_to_database(&self, conn: &PgPool) -> Result<(), sqlx::Error> {
        sqlx::query!(
                r#"INSERT INTO participants (id, first_name, last_name, university_name, medical_conditions, allergies, pronouns, competition, email, phone_number, tshirt_size, study_proof, photo, cv, comments, emergency_contact, has_monthly_opus_card, reduced_mobility)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)"#,
                self.id,
                self.first_name,
                self.last_name,
                self.university_name,
                self.medical_conditions,
                self.allergies,
                self.pronouns,
                self.competition,
                self.email,
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
