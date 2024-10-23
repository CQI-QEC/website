CREATE TYPE ROLE AS ENUM ('participant', 'organizer', 'volunteer', 'chef');

CREATE TYPE COMPETITION AS ENUM ('none', 'conception_senior', 'conception_junior', 'debats_oratoires', 'reingenierie', 'genie_conseil', 'communication_scientifique', 'programmation', 'conception_innovatrice', 'cycle_superieur');

CREATE TYPE UNIVERSITY AS ENUM ('uqac', 'uqar', 'uqat', 'uqo', 'uqtr', 'mcgill', 'mcgill_macdonald', 'concordia', 'ets', 'polymtl', 'ulaval', 'ulaval-agriculture', 'uds', 'none');

CREATE TABLE participants (
    id UUID PRIMARY KEY,
    role ROLE NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    competition COMPETITION NOT NULL,
    university TEXT NOT NULL,
    medical_conditions TEXT,
    allergies TEXT,
    supper TEXT,
    is_vegetarian BOOLEAN,
    pronouns TEXT,
    phone_number TEXT,
    tshirt_size TEXT,
    comments TEXT,
    emergency_contact TEXT,
    has_monthly_opus_card BOOLEAN,
    reduced_mobility TEXT,
    study_proof BYTEA,
    photo BYTEA,
    cv BYTEA
);
