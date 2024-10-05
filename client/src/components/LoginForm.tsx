import { createForm, SubmitHandler } from '@modular-forms/solid';
import { useNavigate } from "@solidjs/router";

type InfoLoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
    const [_loginForm, { Form, Field }] = createForm<InfoLoginForm>();
    const navigate = useNavigate();

    const handleSubmit: SubmitHandler<InfoLoginForm> = (values, event) => {
        event.preventDefault();
        console.log(values);
        navigate("/leader");
    };

    return (
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form class="space-y-6" action="#" method="post" onSubmit={handleSubmit}>
                <Field name="email">
                    {(_field, props) =>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input {...props} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    }
                </Field>

                <Field name="password">
                    {(_field, props) => 
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-light-highlight hover:text-light-highlight">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input {...props} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    }
                </Field>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-light-highlight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-light-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-highlight">Sign in</button>
                </div>
            </Form>
        </div>
    );
}