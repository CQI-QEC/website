import { AuthPayload } from "../binding/AuthPayload"
import { ChangePasswordPayload } from "../binding/ChangePasswordPayload"
import { EmailResetPayload } from "../binding/EmailResetPayload"
import { MinimalParticipant } from "../binding/MinimalParticipant"
import { ParticipantPreview } from "../binding/ParticipantPreview"
import {
    fetch_delete,
    fetch_get,
    fetch_post,
    fetch_post_no_token,
    fetch_put,
} from "./fetch_wrapper"

export async function fetchParticipants() {
    const request = await fetch_get("/participants")
    if (!request) {
        return []
    }
    const data = await request.json()
    return data
}

export async function submitMinimalParticipant(
    participant: MinimalParticipant,
) {
    return await fetch_post("/participant", participant)
}

export async function deleteParticipant(p: ParticipantPreview) {
    return await fetch_delete("/participant/" + p.id)
}

export async function login(auth: AuthPayload) {
    const request = await fetch_post_no_token("/login", auth)
    return await request.json()
}

export async function changePassword(auth: ChangePasswordPayload) {
    const request = await fetch_put("/password", auth)
    if (!request) {
        return { error: "No token" }
    }
    return await request.json()
}

export async function testAuth() {
    const request = await fetch_get("/test")
    if (!request) {
        return { error: "No token" }
    }
    return await request.json()
}

export async function resetEmail(email: EmailResetPayload) {
    return await fetch_post_no_token("/password", email)
}
