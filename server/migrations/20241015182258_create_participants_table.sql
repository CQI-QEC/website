CREATE TYPE role AS ENUM ('participant', 'organizer', 'volunteer', 'chef');

CREATE TABLE participants (
    id UUID PRIMARY KEY,
    role TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    university_name TEXT,
    medical_conditions TEXT NOT NULL,
    allergies TEXT NOT NULL,
    pronouns TEXT NOT NULL,
    competition TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    tshirt_size TEXT NOT NULL,
    comments TEXT NOT NULL,
    emergency_contact TEXT NOT NULL,
    has_monthly_opus_card BOOLEAN NOT NULL,
    reduced_mobility TEXT NOT NULL,
    study_proof BYTEA,
    photo BYTEA,
    cv BYTEA
);
