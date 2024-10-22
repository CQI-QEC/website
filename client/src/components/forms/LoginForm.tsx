import {
    createForm,
    email,
    minLength,
    required,
    SubmitHandler,
} from "@modular-forms/solid"
import { useNavigate } from "@solidjs/router"
import { AuthPayload } from "../../binding/AuthPayload"
import { login } from "../../request/routes"
import { TextInput } from "../forms-component/TextInput"
import { SubmitError } from "../forms-component/SubmitError"
import { createSignal } from "solid-js"
import { t } from "../../stores/locale"

export default function LoginForm() {
    const [_loginForm, { Form, Field }] = createForm<AuthPayload>()
    const navigate = useNavigate()

    const [error, setError] = createSignal<string | null>(null)

    const handleSubmit: SubmitHandler<AuthPayload> = async (values, event) => {
        event.preventDefault()
        const response = await login(values)
        if (!response.error) {
            setError(null)
            localStorage.setItem("token", response.access_token)
            navigate("/dashboard")
        } else {
            setError(t("loginPage.badLogin"))
        }
    }

    return (
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

                <Field
                    name="password"
                    validate={[
                        required(t("loginPage.requiredPassword")),
                        minLength(
                            8,
                            "You password must have 8 characters or more.",
                        ),
                    ]}
                >
                    {(field, props) => (
                        <TextInput
                            {...props}
                            value={field.value}
                            error={field.error}
                            type="password"
                            label={t("loginPage.password")}
                            placeholder="********"
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
                    <SubmitError error={error} />
                </div>
            </Form>
        </div>
    )
}
