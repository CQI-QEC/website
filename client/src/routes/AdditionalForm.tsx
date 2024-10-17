import { createForm, SubmitHandler } from "@modular-forms/solid"
import { Participant } from "../model/participant"
import FixedImage from "../components/FixedImage"
import { useNavigate } from "@solidjs/router"
import { ProtectedRoute } from "../components/ProtectedRoute"

export default function AdditionalForm() {
    const navigate = useNavigate()
    const [_loginForm, { Form, Field }] = createForm<Participant>()

    const handleSubmit: SubmitHandler<Participant> = (values, event) => {
        event.preventDefault()
        console.log(values)
        navigate("/leader")
    }

    interface Props {
        id: any
        name: string
    }

    function TextField(prop: Props) {
        return (
            <Field name={prop.id}>
                {(_field, props) => (
                    <div>
                        <label
                            for={prop.id}
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            {prop.name}
                        </label>
                        <div class="mt-2">
                            <input
                                {...props}
                                id={prop.id}
                                name={prop.id}
                                type="text"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                )}
            </Field>
        )
    }

    return (
        <ProtectedRoute>
            <div class="flex w-full flex-col items-center justify-center">
                <FixedImage url="/banners/documents.svg" height="32rem">
                    <h1 class="text-center font-futur text-6xl text-white">
                        {"Tableau de bord des chefs"}
                    </h1>
                </FixedImage>
                <div class="-mt-32 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form
                        class="space-y-6"
                        action="#"
                        method="post"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            id="medical_conditions"
                            name="Conditions médicales"
                        />
                        <TextField id="allergies" name="Allergies" />
                        <TextField id="pronouns" name="Pronoms" />
                        <TextField
                            id="phone_number"
                            name="Numéro de téléphone"
                        />
                        <TextField id="tshirt_size" name="Taille de T-shirt" />
                        <TextField id="comments" name="Commentaires" />
                        <TextField
                            id="emergency_contact"
                            name="Contact d'urgence"
                        />

                        <Field name="has_monthly_opus_card">
                            {(_field, props) => (
                                <div class="flex items-center">
                                    <input
                                        {...props}
                                        id="has_monthly_opus_card"
                                        type="checkbox"
                                        value=""
                                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                    />
                                    <label
                                        for="has_monthly_opus_card"
                                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Je possède un abonnement pour la carte
                                        OPUS.
                                    </label>
                                </div>
                            )}
                        </Field>

                        <div>
                            <button
                                type="submit"
                                class="flex w-full justify-center rounded-md bg-light-highlight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-light-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-highlight"
                            >
                                Envoyer les renseignements personnels
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </ProtectedRoute>
    )
}
