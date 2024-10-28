import { PlusCircle, Trash } from "phosphor-solid-js"
import { MinimalParticipant } from "../../binding/MinimalParticipant"
import { createResource, For, createSignal } from "solid-js"
import { createForm } from "@modular-forms/solid"
import { Select } from "../forms-component/Select"
import { TextInput } from "../forms-component/TextInput"
import { ParticipantPreview } from "../../binding/ParticipantPreview"
import {
    deleteParticipant,
    fetchParticipants,
    submitMinimalParticipant,
} from "../../request/routes"
import { t } from "../../stores/locale"

interface ParticipantRowProps {
    participant: ParticipantPreview
    refetch: () => void
}

function ParticipantRow(props: ParticipantRowProps) {
    const p = props.participant
    const [isModalOpen, setIsModalOpen] = createSignal(false)

    const deleteParticipantOnClick = async () => {
        await deleteParticipant(p)
        props.refetch()
        setIsModalOpen(false)
    }

    return (
        <>
            <tr class="border-b border-gray-200">
                <td class="p-2 text-center">{p.first_name}</td>
                <td class="p-2 text-center">{p.last_name}</td>
                <td class="p-2 text-center">{p.email}</td>
                <td class="p-2 text-center">{p.competition}</td>
                <td class="p-2 text-center">{p.role}</td>
                {localStorage.getItem("role") === "organizer" && (
                    <td class="p-2 text-center">{p.university}</td>
                )}
                <td class="flex flex-row gap-4 p-2 text-center">
                    {localStorage.getItem("role") !== "volunteer" && (
                        <button
                            type="button"
                            class="rounded bg-red-500 p-1 font-bold text-white hover:bg-red-700"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Trash class="h-8 w-8"></Trash>
                        </button>
                    )}
                </td>
            </tr>
            {isModalOpen() && (
                <div class="p-1/2 absolute left-0 right-0 top-0 z-10 ml-auto mr-auto w-1/2 rounded-lg bg-gray-50 p-4 shadow-2xl">
                    <h2 class="text-2xl font-bold">
                        {t("participantsList.confirmDeleteTitle")}
                    </h2>
                    <p>{t("participantsList.confirmDelete")}</p>
                    <div class="mt-4 flex justify-end gap-2">
                        <button
                            class="rounded bg-gray-500 p-2 text-white hover:bg-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            {t("participantsList.cancel")}
                        </button>
                        <button
                            class="rounded bg-red-500 p-2 text-white hover:bg-red-700"
                            onClick={deleteParticipantOnClick}
                        >
                            {t("participantsList.delete")}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

async function fetchWrapper() {
    console.log("fetching")
    const participants = await fetchParticipants()
    console.log(participants)
    return participants
}

function getGivableRole() {
    const role = localStorage.getItem("role")
    if (role == "organizer") {
        return [
            {
                label: "CO/Directeur",
                value: "organizer",
            },
            {
                label: "Volontaire",
                value: "volunteer",
            },
            {
                label: "Chef",
                value: "chef",
            },
            {
                label: "Participant",
                value: "participant",
            },
        ]
    } else if (role == "chef") {
        return [
            {
                label: "Chef",
                value: "chef",
            },
            {
                label: "Participant",
                value: "participant",
            },
        ]
    } else {
        return []
    }
}

export default function ParticipantForm() {
    const [user, { refetch }] = createResource(fetchWrapper)
    const [_form, { Form, Field }] = createForm<MinimalParticipant>()
    const onSubmit = async (data: MinimalParticipant) => {
        console.log("submitting")
        await submitMinimalParticipant(data)
        console.log("refetching")
        refetch()
    }

    return (
        <Form onSubmit={onSubmit}>
            <table class="min-w-full border border-gray-300 bg-white">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border-b border-gray-300 p-2 text-center">
                            Prénom
                        </th>
                        <th class="border-b border-gray-300 p-2 text-center">
                            Nom
                        </th>
                        <th class="border-b border-gray-300 p-2 text-center">
                            Courriel
                        </th>
                        <th class="border-b border-gray-300 p-2 text-center">
                            Compétition
                        </th>
                        <th class="border-b border-gray-300 p-2 text-center">
                            Rôle
                        </th>
                        {localStorage.getItem("role") === "organizer" && (
                            <th class="border-b border-gray-300 p-2 text-center">
                                Université
                            </th>
                        )}
                        <th class="border-b border-gray-300 p-2 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <For each={user()}>
                        {(participant: ParticipantPreview) => (
                            <ParticipantRow
                                participant={participant}
                                refetch={refetch}
                            />
                        )}
                    </For>
                    {localStorage.getItem("role") !== "volunteer" && (
                        <tr class="border-b border-gray-200">
                            <td class="p-2">
                                <Field name="first_name">
                                    {(field, props) => (
                                        <TextInput
                                            {...props}
                                            value={field.value}
                                            error={field.error}
                                            class="w-48"
                                            type="text"
                                            placeholder="Prénom"
                                            required
                                        />
                                    )}
                                </Field>
                            </td>
                            <td class="p-2">
                                <Field name="last_name">
                                    {(field, props) => (
                                        <TextInput
                                            {...props}
                                            value={field.value}
                                            error={field.error}
                                            class="w-48"
                                            type="text"
                                            placeholder="Nom"
                                            required
                                        />
                                    )}
                                </Field>
                            </td>
                            <td class="p-2">
                                <Field name="email">
                                    {(field, props) => (
                                        <TextInput
                                            {...props}
                                            value={field.value}
                                            error={field.error}
                                            type="email"
                                            placeholder="exemple@courriel.com"
                                            required
                                        />
                                    )}
                                </Field>
                            </td>
                            <td class="p-2">
                                <Field name="competition">
                                    {(field, props) => (
                                        <Select
                                            {...props}
                                            value={field.value}
                                            error={field.error}
                                            options={[
                                                {
                                                    label: "Aucune",
                                                    value: "none",
                                                },
                                                {
                                                    label: "Conception Senior",
                                                    value: "conception_senior",
                                                },
                                                {
                                                    label: "Conception Junior",
                                                    value: "conception_junior",
                                                },
                                                {
                                                    label: "Débats oratoires",
                                                    value: "debats_oratoires",
                                                },
                                                {
                                                    label: "Reingénierie",
                                                    value: "reingenierie",
                                                },
                                                {
                                                    label: "Génie Conseil",
                                                    value: "genie_conseil",
                                                },
                                                {
                                                    label: "Communication Scientifique",
                                                    value: "communication_scientifique",
                                                },
                                                {
                                                    label: "Programmation",
                                                    value: "programmation",
                                                },
                                                {
                                                    label: "Conception innovatrice",
                                                    value: "conception_innovatrice",
                                                },
                                                {
                                                    label: "Cycle supérieur",
                                                    value: "cycle_superieur",
                                                },
                                            ]}
                                            required
                                        />
                                    )}
                                </Field>
                            </td>
                            <td class="p-2">
                                <Field name="role">
                                    {(field, props) => (
                                        <Select
                                            {...props}
                                            value={field.value}
                                            error={field.error}
                                            options={getGivableRole()}
                                            required
                                        />
                                    )}
                                </Field>
                            </td>
                            {localStorage.getItem("role") === "organizer" && (
                                <td class="p-2">
                                    <Field name="university">
                                        {(field, props) => (
                                            <Select
                                                {...props}
                                                value="none"
                                                error={field.error}
                                                options={[
                                                    {
                                                        label: "UQAC",
                                                        value: "uqac",
                                                    },
                                                    {
                                                        label: "UQAR",
                                                        value: "uqar",
                                                    },
                                                    {
                                                        label: "UQAT",
                                                        value: "uqat",
                                                    },
                                                    {
                                                        label: "UQO",
                                                        value: "uqo",
                                                    },
                                                    {
                                                        label: "UQTR",
                                                        value: "uqtr",
                                                    },
                                                    {
                                                        label: "McGill",
                                                        value: "mcgill",
                                                    },
                                                    {
                                                        label: "McGill Macdonald",
                                                        value: "mcgill_macdonald",
                                                    },
                                                    {
                                                        label: "Concordia",
                                                        value: "concordia",
                                                    },
                                                    {
                                                        label: "ETS",
                                                        value: "ets",
                                                    },
                                                    {
                                                        label: "PolyMTL",
                                                        value: "polymtl",
                                                    },
                                                    {
                                                        label: "ULaval",
                                                        value: "ulaval",
                                                    },
                                                    {
                                                        label: "Drummondville",
                                                        value: "drummond",
                                                    },
                                                    {
                                                        label: "UDS",
                                                        value: "uds",
                                                    },
                                                    {
                                                        label: "Aucune",
                                                        value: "none",
                                                    },
                                                ]}
                                                required
                                            />
                                        )}
                                    </Field>
                                </td>
                            )}
                            <td class="p-2">
                                <button class="rounded bg-green-500 p-1 font-bold text-white hover:bg-green-700">
                                    <PlusCircle class="h-8 w-8"></PlusCircle>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Form>
    )
}
