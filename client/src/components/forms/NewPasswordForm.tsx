import { createForm } from "@modular-forms/solid"
import { ChangePasswordPayload } from "../../binding/ChangePasswordPayload"
import { changePassword } from "../../request/routes"
import { TextInput } from "../forms-component/TextInput"
import { SubmitError } from "../forms-component/SubmitError"
import { createSignal } from "solid-js"

export function NewPassword() {
    const [_form, { Form, Field }] = createForm<ChangePasswordPayload>()
    const [error, setError] = createSignal<string | null>(null)

    const onSubmit = async (data: ChangePasswordPayload) => {
        await changePassword(data)
    }
    return (
        <Form onSubmit={onSubmit} class="flex flex-col gap-8">
            <Field name="new_password">
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        class="w-96"
                        type="password"
                        label="Nouveau mot de passe"
                        placeholder="Nouveau mot de passe"
                        required
                    />
                )}
            </Field>
            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-light-highlight py-3 font-semibold text-white shadow-sm"
                >
                    Changer le mot de passe
                </button>
                <SubmitError error={error} />
            </div>
        </Form>
    )
}
