import { createForm, SubmitHandler } from "@modular-forms/solid"
import FixedImage from "../components/FixedImage"
import { useNavigate } from "@solidjs/router"
import { ProtectedRoute } from "../components/ProtectedRoute"
import { Participant } from "../binding/Participant"
import { TextInput } from "../components/forms-component/TextInput"

export default function AdditionalForm() {
    const navigate = useNavigate()
    const [_loginForm, { Form, Field }] = createForm<Participant>()

    const handleSubmit: SubmitHandler<Participant> = (values, event) => {
        event.preventDefault()
        console.log(values)
        navigate("/dashboard")
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
                        <Field name="medical_conditions">
                            {(field, props) => (
                                <TextInput
                                    {...props}
                                    value={field.value || ""}
                                    error={field.error}
                                    label="Conditions médicales"
                                />
                            )}
                        </Field>

                        <div>
                            <button
                                type="submit"
                                class="flex w-full justify-center rounded-md bg-light-highlight px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-light-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-highlight"
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
