import { AuthPayload } from "../binding/AuthPayload"
import { MinimalParticipant } from "../binding/MinimalParticipant"
import { ParticipantPreview } from "../binding/ParticipantPreview"
import {
    fetch_delete,
    fetch_get,
    fetch_post,
    fetch_post_no_token,
} from "./fetch_wrapper"

export async function fetchParticipants() {
    const response = await fetch_get("/participants")
    if (!response) {
        return []
    }
    const data: ParticipantPreview[] = await response.json()
    return data
}

export async function submitMinimalParticipant(
    participant: MinimalParticipant,
) {
    return fetch_post("/participant", participant)
}

export async function deleteParticipant(p: ParticipantPreview) {
    return fetch_delete("participant/" + p.id)
}

export async function login(auth: AuthPayload) {
    return await fetch_post_no_token("/login", auth)
}
