use reqwest::Client;
use serde::Deserialize;
use std::collections::HashMap;

use crate::config::OauthConfig;

#[derive(Deserialize)]
struct OAuthToken {
    access_token: String,
}

impl OauthConfig {
    pub async fn get_access_token(&self, client: &Client) -> Result<String, reqwest::Error> {
        let url = format!(
            "https://login.microsoftonline.com/{}/oauth2/v2.0/token",
            self.tenant_id
        );

        let mut params = HashMap::new();
        params.insert("grant_type", "client_credentials");
        params.insert("client_id", &self.client_id);
        params.insert("client_secret", &self.client_secret);
        params.insert("scope", "https://graph.microsoft.com/.default");

        let response = client
            .post(&url)
            .form(&params)
            .send()
            .await?
            .json::<OAuthToken>()
            .await?;

        Ok(response.access_token)
    }
}
