CREATE TABLE volunteer (
    id UUID PRIMARY KEY,
    university_name TEXT NOT NULL,
    medical_conditions TEXT NOT NULL,
    allergies TEXT NOT NULL,
    pronouns TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    tshirt_size TEXT NOT NULL,
    comments TEXT NOT NULL,
    emergency_contact TEXT NOT NULL,
    has_monthly_opus_card BOOLEAN NOT NULL,
    reduced_mobility TEXT NOT NULL,
    photo BYTEA,
    cv BYTEA
);
