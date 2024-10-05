import { createForm, SubmitHandler } from '@modular-forms/solid';
import { Participant } from '../model/participant';
import FixedImage from '../components/FixedImage';
import { useNavigate } from '@solidjs/router';


export default function AdditionalForm() {
    const navigate = useNavigate();
    const [_loginForm, { Form, Field }] = createForm<Participant>();

    const handleSubmit: SubmitHandler<Participant> = (values, event) => {
        event.preventDefault();
        console.log(values);
        navigate("/leader");
    };

    return (
    <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="font-futur text-white text-center text-6xl">{"Tableau de bord des chefs"}</h1>
            </FixedImage>
            <div class="-mt-32 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    <button type="submit" class="flex w-full justify-center rounded-md bg-light-highlight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-light-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-highlight">Envoyer les renseignements personnels</button>
                </div>
            </Form>
        </div>
        </div>
        
    );
}
