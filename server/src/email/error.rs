use std::{error::Error, fmt::Display};

use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct SendEmailResponseError {
    error: SendEmailResponseErrorBody,
}

#[derive(Debug, Deserialize)]
struct SendEmailResponseErrorBody {
    code: String,
    message: String,
}

impl From<SendEmailResponseError> for EmailError {
    fn from(error: SendEmailResponseError) -> Self {
        match error.error.code.as_str() {
            "ErrorInvalidRecipients" => EmailError::InvalidRecipient,
            "InvalidAuthenticationToken" => EmailError::InvalidToken,
            _ => {
                tracing::error!("Unknown error when sending email: {}", error.error.message);
                EmailError::Other
            }
        }
    }
}

#[derive(Debug)]
pub enum EmailError {
    InvalidRecipient,
    InvalidToken,
    Network(reqwest::Error),
    Other,
}

impl Display for EmailError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            EmailError::InvalidRecipient => write!(f, "Invalid recipient"),
            EmailError::InvalidToken => write!(f, "Invalid token"),
            EmailError::Network(e) => write!(f, "Network error: {}", e),
            EmailError::Other => write!(f, "Unknown error"),
        }
    }
}

impl Error for EmailError {}
