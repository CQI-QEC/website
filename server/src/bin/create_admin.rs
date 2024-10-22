use backend_cqi::{
    model::{competition::Competition, minimal_participant::MinimalParticipant, role::Role},
    Result,
};
use rand::distributions::{Alphanumeric, DistString};
use sqlx::PgPool;

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv()?;

    let password = Alphanumeric.sample_string(&mut rand::thread_rng(), 16);
    let config = backend_cqi::config::Config::from_env();
    let db = PgPool::connect(&config.database_url).await?;
    let participant = MinimalParticipant {
        first_name: "Marc-Antoine".to_string(),
        last_name: "Manningham".to_string(),
        email: "marc-antoine.manningham@polymtl.ca".to_string(),
        competition: Competition::None,
        role: Role::Organizer,
    };
    participant
        .write_to_database(&password, &db, "Polytechnique Montréal".to_string())
        .await?;
    println!("Password: {}", password);
    Ok(())
}
