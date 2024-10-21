import { Info, PlusCircle, Trash } from "phosphor-solid-js"
import { MinimalParticipant } from "../../binding/MinimalParticipant"
import { createResource, For } from "solid-js"
import { createForm } from "@modular-forms/solid"
import { Select } from "../forms-component/Select"
import { TextInput } from "../forms-component/TextInput"
import { ParticipantPreview } from "../../binding/ParticipantPreview"
import {
    deleteParticipant,
    fetchParticipants,
    submitMinimalParticipant,
} from "../../request/routes"

interface ParticipantRowProps {
    participant: ParticipantPreview
    refetch: () => void
}

function ParticipantRow(props: ParticipantRowProps) {
    const p = props.participant
    const deleteParticipantOnClick = async () => {
        await deleteParticipant(p)
        props.refetch()
    }
    return (
        <tr class="border-b border-gray-200">
            <td class="p-2 text-center">{p.first_name}</td>
            <td class="p-2 text-center">{p.last_name}</td>
            <td class="p-2 text-center">{p.email}</td>
            <td class="p-2 text-center">{p.competition}</td>
            <td class="p-2 text-center">{p.role}</td>
            <td class="flex flex-row gap-4 p-2 text-center">
                <button
                    type="button"
                    class="rounded bg-blue-500 p-1 font-bold text-white hover:bg-blue-700"
                >
                    <Info class="h-8 w-8"></Info>
                </button>
                <button
                    type="button"
                    class="rounded bg-red-500 p-1 font-bold text-white hover:bg-red-700"
                    onClick={deleteParticipantOnClick}
                >
                    <Trash class="h-8 w-8"></Trash>
                </button>
            </td>
        </tr>
    )
}

async function fetchWrapper() {
    console.log("fetching")
    const participants = await fetchParticipants()
    console.log(participants)
    return participants
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
                    <tr class="border-b border-gray-200">
                        <td class="p-2">
                            <Field name="first_name">
                                {(field, props) => (
                                    <TextInput
                                        {...props}
                                        value={field.value}
                                        error={field.error}
                                        class="w-52"
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
                                        class="w-52"
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
                                        options={[
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
                                        ]}
                                        required
                                    />
                                )}
                            </Field>
                        </td>
                        <td class="p-2">
                            <button class="rounded bg-green-500 p-1 font-bold text-white hover:bg-green-700">
                                <PlusCircle class="h-8 w-8"></PlusCircle>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Form>
    )
}
