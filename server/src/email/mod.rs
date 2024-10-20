pub mod oauth;

use reqwest::{Client, StatusCode};
use serde::Serialize;

use crate::config::OauthConfig;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct EmailPayload {
    message: Message,
    save_to_sent_items: bool,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct Message {
    subject: String,
    body: EmailBody,
    to_recipients: Vec<Recipient>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct EmailBody {
    content_type: String,
    content: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct Recipient {
    email_address: EmailAddress,
}

#[derive(Serialize)]
struct EmailAddress {
    address: String,
}

#[derive(Debug)]
pub struct EmailClient {
    oauth: OauthConfig,
    client: Client,
    access_token: String,
}

impl EmailClient {
    pub async fn new() -> Self {
        let client = Client::new();
        let oauth = OauthConfig::from_env();
        let access_token = oauth
            .get_access_token(&client)
            .await
            .expect("Failed to get access token");
        Self {
            oauth,
            client,
            access_token,
        }
    }

    pub async fn send_email(
        &mut self,
        subject: impl Into<String>,
        body: impl Into<String>,
        to_address: impl Into<String>,
    ) -> Result<(), String> {
        let subject = subject.into();
        let body = body.into();
        let to_address = to_address.into();
        if let Err(_) = self
            .try_send_email(subject.clone(), body.clone(), to_address.clone())
            .await
        {
            self.access_token = self
                .oauth
                .get_access_token(&self.client)
                .await
                .expect("Failed to get access token");
            if let Err(e) = self.try_send_email(subject, body, to_address).await {
                tracing::error!("Failed to send email: {}", e);
                return Err(e);
            };
        }
        Ok(())
    }

    async fn try_send_email(
        &self,
        to_address: impl Into<String>,
        subject: impl Into<String>,
        body: impl Into<String>,
    ) -> Result<(), String> {
        let url = format!(
            "https://graph.microsoft.com/v1.0/users/{}/sendMail",
            self.oauth.user_id
        );

        let message = EmailPayload {
            message: Message {
                subject: subject.into(),
                body: EmailBody {
                    content_type: "Text".to_string(),
                    content: body.into(),
                },
                to_recipients: vec![Recipient {
                    email_address: EmailAddress {
                        address: to_address.into(),
                    },
                }],
            },
            save_to_sent_items: false,
        };

        let response = self
            .client
            .post(&url)
            .bearer_auth(self.access_token.clone())
            .json(&message)
            .send()
            .await
            .map_err(|e| e.to_string())?;

        match response.status() {
            StatusCode::ACCEPTED => Ok(()),
            _ => Err(response.text().await.map_err(|e| e.to_string())?.into()),
        }
    }
}
