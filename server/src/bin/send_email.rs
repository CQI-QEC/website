use backend_cqi::{email::EmailClient, Result};
use chrono::Local;

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv()?;
    let mut email_client = EmailClient::new().await;
    println!("Sending email {}", Local::now().format("%Y-%m-%d %H:%M:%S"));
    email_client
        .send_email(
            "Inscription site web de la CQI",
            "Salut, tu es inscrit sur le site web de la CQI.\n Tu peux te connecter avec ton email et ton mot de passe.\n Bonne journée !",
            "marcantoine_manningham@outlook.com",
        )
        .await?;
    println!("Email sent {}", Local::now().format("%Y-%m-%d %H:%M:%S"));
    Ok(())
}
