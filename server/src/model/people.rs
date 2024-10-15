use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
pub struct Person {
    pub id: Uuid,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub university_name: String,
}

impl Person {
    pub async fn write_to_database(&self, conn: &PgPool) -> Result<(), sqlx::Error> {
        sqlx::query!(
            r#"
                INSERT INTO people (id, first_name, last_name, email, university_name)
                VALUES ($1, $2, $3, $4, $5)
            "#,
            self.id,
            self.first_name,
            self.last_name,
            self.email,
            self.university_name
        )
        .execute(conn)
        .await?;
        Ok(())
    }
}
