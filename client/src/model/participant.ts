export enum Competition {
    Senior = "senior",
    Junior = "junior",
    Debate = "debate",
    Reengineering = "reengineering",
    Consulting = "consulting",
    Scientific = "scientific",
    Programming = "programming",
    Design = "design",
    SuperiorCycle = "superiorcycle",
}

export enum TshirtSize {
    XS = "xs",
    S = "s",
    M = "m",
    L = "l",
    XL = "xl",
    XXL = "xxl",
}

export interface BaseParticipant {
    first_name: string;
    last_name: string;
    university_name: string;
    email: string;
}

export type Participant = {
    /// Created by the delegation manager
    medical_conditions: string;
    allergies: string;
    pronouns: string;
    phone_number: string;
    tshirt_size: TshirtSize;
    competitions: Competition;
    proof_studies: File;
    photo: File;
    cv: File;
    comments: string;
    study_proof: string;
    emergency_contact: string;
    has_monthly_opus_card: string;
}