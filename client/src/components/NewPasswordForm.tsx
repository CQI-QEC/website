import { createForm } from "@modular-forms/solid"
import { ChangePasswordPayload } from "../binding/ChangePasswordPayload"
import { changePassword } from "../request/routes"
import { TextInput } from "./forms/TextInput"

export function NewPassword() {
    const [_form, { Form, Field }] = createForm<ChangePasswordPayload>()

    const onSubmit = async (data: ChangePasswordPayload) => {
        await changePassword(data)
    }
    return (
        <Form onSubmit={onSubmit} class="w-full">
            <Field name="new_password">
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        class="w-52"
                        type="password"
                        label="Nouveau mot de passe"
                        placeholder="Nouveau mot de passe"
                        required
                    />
                )}
            </Field>
        </Form>
    )
}
