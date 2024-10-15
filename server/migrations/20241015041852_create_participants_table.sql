-- Add migration script here
CREATE TABLE participants (
    id UUID PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    university_name TEXT NOT NULL,
    medical_conditions TEXT,
    allergies TEXT,
    pronouns TEXT,
    competition TEXT,
    email TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    tshirt_size TEXT,
    study_proof BYTEA,
    photo BYTEA,
    cv BYTEA,
    comments TEXT,
    emergency_contact TEXT NOT NULL,
    has_monthly_opus_card BOOLEAN NOT NULL,
    reduced_mobility TEXT
);
