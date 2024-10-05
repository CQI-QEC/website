import { createForm, SubmitHandler } from '@modular-forms/solid';
import { Participant } from '../model/participant';


export default function AdditionalForm() {
    const [_loginForm, { Form, Field }] = createForm<Participant>();

    const handleSubmit: SubmitHandler<Participant> = (values, event) => {
        event.preventDefault();
        console.log(values);
    };

    return (
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form class="space-y-6" action="#" method="post" onSubmit={handleSubmit}>
                <Field name="medical_conditions">
                    {(_field, props) =>
                        <div>
                            <label for="medical_conditions" class="block text-sm font-medium leading-6 text-gray-900">Conditions médicales</label>
                            <div class="mt-2">
                                <input {...props} id="medical_conditions" name="medical_conditions" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    }
                </Field>

                <Field name="allergies">
                    {(_field, props) =>
                        <div>
                            <label for="allergies" class="block text-sm font-medium leading-6 text-gray-900">Allergies</label>
                            <div class="mt-2">
                                <input {...props} id="allergies" name="allergies" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    }
                </Field>
                
                

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-light-highlight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-light-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-highlight">Ajouter les détails personnels</button>
                </div>
            </Form>
        </div>
    );
}
