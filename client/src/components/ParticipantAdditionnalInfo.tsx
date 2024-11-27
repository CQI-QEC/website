import { useParams } from "@solidjs/router"
import { createResource } from "solid-js"
import { getParticipant } from "../request/routes"
import DownloadPdf from "./DownloadPdf"

export default function ParticipantAdditionnalInfo() {
    const params = useParams()

    const fetch = async () => {
        const id = params.id
        if (!id) return
        const p = await getParticipant(id)
        console.log(p)
        return p
    }

    const [user] = createResource(fetch)

    return (
        <div class="flex items-center justify-center px-4 pt-16">
            {user() && (
                <div class="w-full rounded-lg bg-white">
                    <h1 class="mb-4 text-2xl font-bold">
                        Participant Information
                    </h1>

                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Personal Info */}
                        <div>
                            <h2 class="mb-2 text-xl font-semibold">
                                Personal Info
                            </h2>
                            <p>
                                <span class="font-medium">First Name:</span>{" "}
                                {user().first_name}
                            </p>
                            <p>
                                <span class="font-medium">Last Name:</span>{" "}
                                {user().last_name}
                            </p>
                            <p>
                                <span class="font-medium">Email:</span>{" "}
                                {user().email}
                            </p>
                            <p>
                                <span class="font-medium">Phone Number:</span>{" "}
                                {user().phone_number}
                            </p>
                            <p>
                                <span class="font-medium">Pronouns:</span>{" "}
                                {user().pronouns}
                            </p>
                            <p>
                                <span class="font-medium">T-Shirt Size:</span>{" "}
                                {user().tshirt_size}
                            </p>
                            <p>
                                <span class="font-medium">Comments:</span>{" "}
                                {user().comments}
                            </p>
                        </div>

                        {/* Competition Info */}
                        <div>
                            <h2 class="mb-2 text-xl font-semibold">
                                Competition Info
                            </h2>
                            <p>
                                <span class="font-medium">Role:</span>{" "}
                                {user().role}
                            </p>
                            <p>
                                <span class="font-medium">Competition:</span>{" "}
                                {user().competition}
                            </p>
                            <p>
                                <span class="font-medium">University:</span>{" "}
                                {user().university}
                            </p>
                            <p>
                                <span class="font-medium">
                                    Food Form Completed:
                                </span>{" "}
                                {user().food_forms_completed ? "Yes" : "No"}
                            </p>
                            <p>
                                <span class="font-medium">
                                    Dietary Restrictions:{" "}
                                </span>
                                {user().dietary_restrictions}
                            </p>
                            <p>
                                <span class="font-medium">Allergies:</span>{" "}
                                {user().allergies}
                            </p>
                        </div>

                        {/* Emergency Info */}
                        <div>
                            <h2 class="mb-2 text-xl font-semibold">
                                Emergency Info
                            </h2>
                            <p>
                                <span class="font-medium">
                                    Emergency Contact Name:
                                </span>{" "}
                                {user().emergency_contact_name}
                            </p>
                            <p>
                                <span class="font-medium">
                                    Emergency Contact Phone:
                                </span>{" "}
                                {user().emergency_contact_phone}
                            </p>
                            <p>
                                <span class="font-medium">Relationship:</span>{" "}
                                {user().emergency_contact_relationship}
                            </p>
                            <p>
                                <span class="font-medium">
                                    Medical Conditions:
                                </span>{" "}
                                {user().medical_conditions}
                            </p>
                            <p>
                                <span class="font-medium">
                                    Reduced Mobility:
                                </span>{" "}
                                {user().reduced_mobility}
                            </p>
                        </div>

                        {/* Files */}
                        <div>
                            <h2 class="mb-2 text-xl font-semibold">
                                Uploaded Documents
                            </h2>
                            <p>
                                <span class="font-medium">Study Proof:</span>{" "}
                                {user().study_proof === "" && "No study proof"}
                                {user().study_proof !== "" && (
                                    <DownloadPdf
                                        base64={user().study_proof}
                                        file_name={
                                            user().first_name +
                                            "_" +
                                            user().last_name +
                                            "_study_proof.pdf"
                                        }
                                    />
                                )}
                            </p>
                            <p>
                                <span class="font-medium">Photo:</span>{" "}
                                {user().cv === "" && "No photo uploaded"}
                                {user().cv !== "" && (
                                    <img
                                        width="256"
                                        height="256"
                                        src={
                                            "data:image/png;base64," +
                                            user().photo
                                        }
                                    ></img>
                                )}
                            </p>
                            <p>
                                <span class="font-medium">CV:</span>{" "}
                                {user().cv === "" && "No CV uploaded"}
                                {user().cv !== "" && (
                                    <DownloadPdf
                                        base64={user().cv}
                                        file_name={
                                            user().first_name +
                                            "_" +
                                            user().last_name +
                                            "_cv.pdf"
                                        }
                                    />
                                )}
                            </p>
                            <p>
                                <span class="font-medium">
                                    Monthly Opus Card:
                                </span>{" "}
                                {user().has_monthly_opus_card ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
