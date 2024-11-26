import { createForm, minLength, required } from "@modular-forms/solid"
import { ChangePasswordPayload } from "../../binding/ChangePasswordPayload"
import { changePassword } from "../../request/routes"
import { SubmitError } from "../forms-component/SubmitError"
import { createEffect, createSignal } from "solid-js"
import { t } from "../../stores/locale"
import { SubmitSuccess } from "../forms-component/SubmitSuccess"
import { PasswordInput } from "../forms-component/PasswordInput"

export function NewPassword() {
    const [_form, { Form, Field }] = createForm<ChangePasswordPayload>()
    const [error, setError] = createSignal<string | null>(null)
    const [success, setSuccess] = createSignal<string | null>(null)

    const onSubmit = async (data: ChangePasswordPayload) => {
        const response = await changePassword(data)
        if (response.error) {
            setError("Erreur lors du changement de mot de passe")
        } else {
            setSuccess("Votre mot de passe a été changé avec succès")
        }
    }
    return (
        <Form onSubmit={onSubmit} class="flex flex-col gap-8">
            <Field
                name="new_password"
                validate={[
                    required(t("loginPage.requiredPassword")),
                    minLength(
                        8,
                        "You password must have 8 characters or more.",
                    ),
                ]}
            >
                {(field, props) => (
                    <PasswordInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        class="w-96"
                        label="Nouveau mot de passe"
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
                <SubmitSuccess success={success} />
            </div>
        </Form>
    )
}
