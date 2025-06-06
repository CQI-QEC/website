// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Competition } from "./Competition";
import type { Role } from "./Role";
import type { University } from "./University";

export type MinimalParticipant = {
  first_name: string;
  last_name: string;
  food_forms_completed: boolean | null;
  email: string;
  competition: Competition;
  university: University;
  role: Role;
};
