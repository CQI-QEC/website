import {
    createForm,
    minLength,
    required,
    SubmitHandler,
} from "@modular-forms/solid"
import { useNavigate } from "@solidjs/router"
import { TextInput } from "../components/forms/TextInput"

type InfoLoginForm = {
    email: string
    password: string
}

export default function LoginForm() {
    const [_loginForm, { Form, Field }] = createForm<InfoLoginForm>()
    const navigate = useNavigate()

    const handleSubmit: SubmitHandler<InfoLoginForm> = async (
        values,
        event,
    ) => {
        event.preventDefault()
        const request = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
        const response = await request.json()
        if (!response.error) {
            localStorage.setItem("token", response.access_token)
            navigate("/dashboard")
        }
    }

    return (
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form class="space-y-6" onSubmit={handleSubmit}>
                <Field name="email">
                    {(field, props) => (
                        <TextInput
                            {...props}
                            value={field.value}
                            error={field.error}
                            label="Email"
                            type="email"
                            placeholder="exemple@courriel.com"
                            required
                        />
                    )}
                </Field>

                <Field
                    name="password"
                    validate={[
                        required("Please enter your password."),
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
                            label="Password"
                            placeholder="********"
                            required
                        />
                    )}
                </Field>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-light-highlight py-3 text-sm font-semibold text-white shadow-sm"
                    >
                        Sign in
                    </button>
                </div>
            </Form>
        </div>
    )
}
