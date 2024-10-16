CREATE TYPE ROLE AS ENUM ('participant', 'organizer', 'volunteer', 'chef');

CREATE TABLE participants (
    id UUID PRIMARY KEY,
    role ROLE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    university_name TEXT,
    medical_conditions TEXT,
    allergies TEXT,
    pronouns TEXT,
    competition TEXT,
    phone_number TEXT,
    tshirt_size TEXT,
    comments TEXT,
    emergency_contact TEXT ,
    has_monthly_opus_card BOOLEAN,
    reduced_mobility TEXT,
    study_proof BYTEA,
    photo BYTEA,
    cv BYTEA
);
