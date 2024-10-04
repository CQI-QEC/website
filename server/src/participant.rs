// write an html and tailwind forms for getting these fields
// firstName, lastName, medicalConditions, pronouns, universityName, competition, companyName, email, phoneNumber, tshirtSize, allergies, proofStudies, photo, cv, comments, study proof, emergency contact, has monthly opus card
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Participant {
    /// Created by the delegation manager
    first_name: String,
    last_name: String,
    university_name: String,
    medical_conditions: String,
    allergies: String,
    pronouns: String,
    competition: String,
    company_name: String,
    email: String,
    phone_number: String,
    tshirt_size: String,
    affiliation: String,
    proof_studies: String,
    photo: String,
    cv: String,
    comments: String,
    study_proof: String,
    emergency_contact: String,
    has_monthly_opus_card: bool,
}
