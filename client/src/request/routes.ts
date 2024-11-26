import { AuthPayload } from "../binding/AuthPayload"
import { ChangePasswordPayload } from "../binding/ChangePasswordPayload"
import { EmailResetPayload } from "../binding/EmailResetPayload"
import { MinimalParticipant } from "../binding/MinimalParticipant"
import { ParticipantInfo } from "../binding/ParticipantInfo"
import { ParticipantPreview } from "../binding/ParticipantPreview"
import {
    fetch_delete,
    fetch_get,
    fetch_patch,
    fetch_post,
    fetch_post_no_token,
    fetch_put,
} from "./fetch_wrapper"

export async function fetchParticipants(): Promise<ParticipantPreview[]> {
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
    const payload: any = participant
    if (localStorage.getItem("role") == "chef") {
        payload.university = localStorage.getItem("university")
    }
    return await fetch_post("/participant", payload)
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
    return request
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

export async function patchParticipantInfo(info: ParticipantInfo) {
    return await fetch_patch("/participant", info)
}

export async function getParticipant(id: string) {
    const response = await fetch_get("/participant/" + id)
    if (!response) {
        return undefined
    }
    return await response.json()
}
