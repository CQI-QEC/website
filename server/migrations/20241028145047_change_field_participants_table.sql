-- Add migration script here
ALTER TYPE UNIVERSITY RENAME TO UNIVERSITY_OLD;

CREATE TYPE UNIVERSITY AS ENUM ('uqac', 'uqar', 'uqat', 'uqo', 'uqtr', 'mcgill', 'mcgill_macdonald', 'concordia', 'ets', 'polymtl', 'ulaval', 'drummond', 'uds', 'none');

ALTER TABLE participants ALTER COLUMN university TYPE UNIVERSITY USING university::text::UNIVERSITY;

DROP TYPE UNIVERSITY_OLD;

CREATE TYPE DIETARY_RESTRICTION AS ENUM ('none', 'vegetarian', 'vegan', 'halal', 'other');

ALTER TABLE participants ADD COLUMN dietary_restrictions DIETARY_RESTRICTION;

ALTER TABLE participants ALTER COLUMN is_vegetarian DROP NOT NULL;

ALTER TABLE participants ADD COLUMN emergency_contact_name TEXT;
ALTER TABLE participants ADD COLUMN emergency_contact_phone TEXT;
ALTER TABLE participants ADD COLUMN emergency_contact_relationship TEXT;
ALTER TABLE participants DROP COLUMN emergency_contact;
