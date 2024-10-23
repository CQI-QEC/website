import {
    createForm,
    email,
    required,
    SubmitHandler,
} from "@modular-forms/solid"
import { createSignal } from "solid-js"
import { EmailResetPayload } from "../../binding/EmailResetPayload"
import { resetEmail } from "../../request/routes"
import { t } from "../../stores/locale"
import { SubmitError } from "../forms-component/SubmitError"
import { SubmitSuccess } from "../forms-component/SubmitSuccess"
import { TextInput } from "../forms-component/TextInput"

export function EmailResetForm() {
    const [_loginForm, { Form, Field }] = createForm<EmailResetPayload>()

    const [error, setError] = createSignal<string | null>(null)
    const [success, setSuccess] = createSignal<string | null>(null)

    const handleSubmit: SubmitHandler<EmailResetPayload> = async (
        values,
        event,
    ) => {
        event.preventDefault()
        const request = await resetEmail(values)
        if (request.status !== 200) {
            setError(t("loginPage.badLogin"))
            setSuccess(null)
        } else {
            setError(null)
            setSuccess(t("loginPage.resetEmailSent"))
        }
    }
    return (
        <Form class="space-y-6" onSubmit={handleSubmit}>
            <Field
                name="email"
                validate={[
                    required(t("loginPage.requiredEmail")),
                    email(t("loginPage.invalidEmail")),
                ]}
            >
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        label={t("loginPage.email")}
                        type="email"
                        placeholder="exemple@courriel.com"
                        required
                    />
                )}
            </Field>
            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-light-highlight py-3 font-semibold text-white shadow-sm"
                >
                    {t("loginPage.signIn")}
                </button>
                <SubmitSuccess success={success} />
                <SubmitError error={error} />
            </div>
        </Form>
    )
}
