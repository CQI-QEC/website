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

function getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        // Event listener when the file reading is completed
        reader.onload = () => {
            // `reader.result` contains the base64 string
            const base64String = reader.result as string
            const base64StringSplit = base64String.split(",")[1]
            if (!base64StringSplit) {
                reject(new Error("Failed to convert file to base64"))
            }
            resolve(base64StringSplit) // Removing the base64 prefix
        }

        // Event listener for any error
        reader.onerror = () => {
            reject(new Error("Failed to convert file to base64"))
        }

        // Reading the file as a data URL (which contains base64 encoded string)
        reader.readAsDataURL(file)
    })
}

export async function patchParticipantInfo(info: ParticipantInfo) {
    const payload: any = info
    if (info.study_proof) {
        payload.study_proof = await getBase64(info.study_proof)
    } else {
        payload.study_proof = ""
    }
    if (info.photo) {
        payload.photo = await getBase64(info.photo)
    } else {
        payload.photo = ""
    }
    if (info.cv) {
        payload.cv = await getBase64(info.cv)
    } else {
        payload.cv = ""
    }
    return await fetch_patch("/participant", payload)
}

export async function getParticipant(id: string) {
    const response = await fetch_get("/participant/" + id)
    if (!response) {
        return undefined
    }
    return await response.json()
}
