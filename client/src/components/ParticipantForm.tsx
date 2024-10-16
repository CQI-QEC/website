import { Info, PlusCircle, Trash } from "phosphor-solid-js"
import { Participant } from "../binding/Participant"
import { MinimalParticipant } from "../binding/MinimalParticipant"
import { createResource, For } from "solid-js"
import { createForm } from "@modular-forms/solid"
import { Select } from "./forms/Select"
import { TextInput } from "./forms/TextInput"

interface ParticipantRowProps {
    participant: Participant
}

function ParticipantRow(props: ParticipantRowProps) {
    const p = props.participant
    return (
        <tr class="border-b border-gray-200">
            <td class="p-2 text-center">{p.first_name}</td>
            <td class="p-2 text-center">{p.last_name}</td>
            <td class="p-2 text-center">{p.email}</td>
            <td class="p-2 text-center">{p.competition}</td>
            <td class="p-2 text-center">{p.role}</td>
            <td class="flex flex-row gap-4 p-2 text-center">
                <button class="rounded bg-blue-500 p-1 font-bold text-white hover:bg-blue-700">
                    <Info class="h-8 w-8"></Info>
                </button>
                <button class="rounded bg-red-500 p-1 font-bold text-white hover:bg-red-700">
                    <Trash class="h-8 w-8"></Trash>
                </button>
            </td>
        </tr>
    )
}

async function fetchParticipants() {
    const response = await fetch("http://localhost:3000/api/participants")
    const data = await response.json()
    return data
}

export default function ParticipantForm() {
    const [user] = createResource(fetchParticipants)
    const [form, { Form, Field }] = createForm<MinimalParticipant>()
    const onSubmit = async (data: MinimalParticipant) => {
        console.log(data)
        const response = await fetch("http://localhost:3000/api/participant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        console.log(response)
        const result = await response.json()
        console.log(result)
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
                            Rôles
                        </th>
                        <th class="border-b border-gray-300 p-2 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <For each={user()}>
                        {(participant: Participant) => (
                            <ParticipantRow participant={participant} />
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
                                                label: "Projet de recherche au cycle supérieur",
                                                value: "cycle_superieur",
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
