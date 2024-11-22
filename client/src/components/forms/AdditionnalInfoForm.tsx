import {
    createForm,
    required,
    setValues,
    SubmitHandler,
} from "@modular-forms/solid"
import { TextInput } from "../forms-component/TextInput"
import { ParticipantInfo } from "../../binding/ParticipantInfo"
import { Select } from "../forms-component/Select"
import { FileInput } from "../forms-component/FileInput"
import { getParticipant, patchParticipantInfo } from "../../request/routes"
import { createEffect, createSignal } from "solid-js"
import { locale, t } from "../../stores/locale"
import { SubmitError } from "../forms-component/SubmitError"
import { SubmitSuccess } from "../forms-component/SubmitSuccess"
import { YesNo } from "../forms-component/YesNo"

export function AdditionalInfoForm() {
    const [loginForm, { Form, Field }] = createForm<ParticipantInfo>()
    const [error, setError] = createSignal<string | null>(null)
    const [success, setSuccess] = createSignal<string | null>(null)

    const handleSubmit: SubmitHandler<ParticipantInfo> = async (
        values,
        event,
    ) => {
        event.preventDefault()
        const response = await patchParticipantInfo(values)
        if (response && response.status == 201) {
            setSuccess(t("additionalInfo.success"))
        } else {
            setError(t("additionalInfo.error"))
        }
    }

    const [info, setInfo] = createSignal<ParticipantInfo | null>(null)

    createEffect(async () => {
        const id = localStorage.getItem("id")
        if (!id) return
        const response = await getParticipant(id)
        if (!response.error) {
            const participant = response as ParticipantInfo
            setInfo(participant)
            setValues(loginForm, participant)
        }
    })

    return (
        <Form
            class="flex flex-col space-y-6 p-16"
            action="#"
            method="post"
            onSubmit={handleSubmit}
        >
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=vqE-tygNokyiBaLolpqM-SIriDaTmJhLspWYwmEq8p1UMThJVFdBU0pHV1RSWE82NTBQVlBJTThGTi4u">
                <span class="text-xl font-bold text-blue-700">
                    Lien pour le formulaire des repas à remplir aussi
                </span>
            </a>
            <Field
                name="food_forms_completed"
                type="boolean"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <YesNo
                        {...props}
                        value={"no"}
                        error={field.error}
                        label={t("additionalInfo.food")}
                        required
                    />
                )}
            </Field>
            <div class="flex w-full flex-col gap-1 font-medium md:text-lg lg:text-xl">
                <span>
                    Bonjour {info()?.first_name} {info()?.last_name}
                </span>
                <span>Votre délégation est {info()?.university}</span>
                {info() != null && info()?.competition != "none" && (
                    <span>
                        vous faites la compétition {info()?.competition}
                    </span>
                )}
            </div>
            <Field
                name="pronouns"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value || ""}
                        error={field.error}
                        label={t("additionalInfo.pronounsLabel")}
                        type="text"
                        placeholder={t("additionalInfo.pronouns")}
                        required
                    />
                )}
            </Field>

            <Field name="allergies">
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value || ""}
                        error={field.error}
                        label={t("additionalInfo.allergiesLabel")}
                        type="text"
                        placeholder={t("additionalInfo.allergies")}
                    />
                )}
            </Field>

            <Field
                name="dietary_restrictions"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <Select
                        {...props}
                        value={field.value || "none"}
                        error={field.error}
                        label={t("additionalInfo.dietaryRestrictions")}
                        options={[
                            {
                                label: "Aucune",
                                value: "none",
                            },
                            {
                                label: "Végan",
                                value: "vegan",
                            },
                            {
                                label: "Végétarien",
                                value: "vegetarian",
                            },
                            {
                                label: "Halal",
                                value: "halal",
                            },
                            {
                                label: "Autre à indiquer en commentaire",
                                value: "other",
                            },
                        ]}
                        required
                    />
                )}
            </Field>

            <Field name="medical_conditions">
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value || ""}
                        error={field.error}
                        label={t("additionalInfo.medicalConditionsLabel")}
                        type="text"
                        placeholder={t("additionalInfo.medicalConditions")}
                    />
                )}
            </Field>

            <Field name="reduced_mobility">
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value || ""}
                        error={field.error}
                        label={t("additionalInfo.reducedMobilityLabel")}
                        type="text"
                    />
                )}
            </Field>

            <h1 class="mb-2 mt-6 text-xl">
                {t("additionalInfo.emergencyContact")}
            </h1>
            <div class="pl-10">
                <Field
                    name="emergency_contact_name"
                    validate={[required(t("additionalInfo.required"))]}
                >
                    {(field, props) => (
                        <TextInput
                            {...props}
                            value={field.value || ""}
                            error={field.error}
                            label={t(
                                "additionalInfo.emergencyContactNameLabel",
                            )}
                            type="text"
                            required
                        />
                    )}
                </Field>

                <Field
                    name="emergency_contact_phone"
                    validate={[required(t("additionalInfo.required"))]}
                >
                    {(field, props) => (
                        <TextInput
                            {...props}
                            value={field.value || ""}
                            error={field.error}
                            label={t(
                                "additionalInfo.emergencyContactPhoneLabel",
                            )}
                            type="text"
                            required
                        />
                    )}
                </Field>

                <Field
                    name="emergency_contact_relationship"
                    validate={[required(t("additionalInfo.required"))]}
                >
                    {(field, props) => (
                        <TextInput
                            {...props}
                            value={field.value || ""}
                            error={field.error}
                            label={t(
                                "additionalInfo.emergencyContactRelationshipLabel",
                            )}
                            type="text"
                            required
                        />
                    )}
                </Field>
            </div>

            <Field
                name="phone_number"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value || ""}
                        error={field.error}
                        label={t("additionalInfo.phoneNumberLabel")}
                        type="text"
                        placeholder={t("additionalInfo.phoneNumber")}
                        required
                    />
                )}
            </Field>

            <Field
                name="tshirt_size"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <Select
                        {...props}
                        value={field.value || "m"}
                        error={field.error}
                        label={t("additionalInfo.tshirtSize")}
                        options={[
                            {
                                label: "XS",
                                value: "xs",
                            },
                            {
                                label: "S",
                                value: "s",
                            },
                            {
                                label: "M",
                                value: "m",
                            },
                            {
                                label: "L",
                                value: "l",
                            },
                            {
                                label: "XL",
                                value: "xl",
                            },
                            {
                                label: "2XL",
                                value: "xxl",
                            },
                        ]}
                        required
                    />
                )}
            </Field>

            <Field
                name="has_monthly_opus_card"
                type="boolean"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <YesNo
                        {...props}
                        value={"no"}
                        error={field.error}
                        label={t("additionalInfo.hasMonthlyOpusCard")}
                        required
                    />
                )}
            </Field>

            <Field
                name="study_proof"
                type="File"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <FileInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        label={t("additionalInfo.studyProofLabel")}
                        accept="image/*,.pdf"
                        required
                    />
                )}
            </Field>

            <Field
                name="photo"
                type="File"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <FileInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        label={t("additionalInfo.photoLabel")}
                        accept="image/*"
                        required
                    />
                )}
            </Field>

            <Field
                name="cv"
                type="File"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <FileInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        label={t("additionalInfo.cvLabel")}
                        accept=".pdf"
                        required
                    />
                )}
            </Field>

            <Field
                name="comments"
                validate={[required(t("additionalInfo.required"))]}
            >
                {(field, props) => (
                    <TextInput
                        {...props}
                        value={field.value || ""}
                        error={field.error}
                        label="Commentaires"
                        class="w-full"
                        type="text"
                        placeholder="Commentaires"
                    />
                )}
            </Field>

            {locale() == "fr" && (
                <div class="text-xl">
                    <p>
                        En cliquant sur mettre à jour les renseignements
                        personnels
                    </p>
                    <ul class="list-disc">
                        <li>
                            J'ai lu et j'accepte{" "}
                            <a
                                href="/doc/Politique_de_discipline_FR.pdf"
                                target="_blank"
                                class="text-blue-500"
                            >
                                la politique de discipline de la CREIQ.
                            </a>
                        </li>
                        <li>
                            J'ai lu et j'accepte{" "}
                            <a
                                href="/doc/Politique_BIPCV.pdf"
                                target="_blank"
                                class="text-blue-500"
                            >
                                le code de conduite du BIPCV
                            </a>
                        </li>
                        <li>
                            J'ai lu et j'accepte{" "}
                            <a
                                href="/doc/Reglement_CQI_FR.pdf"
                                target="_blank"
                                class="text-blue-500"
                            >
                                le règlement de la CQI.
                            </a>
                        </li>
                        <li>
                            Je consens à ce que mon image sur les photographies
                            ainsi que ma voix et mon image dans les
                            enregistrements vidéo soient utilisés pour tout type
                            de promotion de la CQI ou de la CREIQ.
                        </li>
                        <li>
                            Je consens à ce que mon adresse courriel soit
                            transmise à Génium et que ceux-ci me transmettent
                            des offres promotionnelles. Il sera possible de se
                            retirer de cette liste de courriel à tout moment à
                            la suite de la compétition.
                        </li>
                    </ul>
                </div>
            )}

            {locale() == "en" && (
                <div class="text-xl">
                    <p>By clicking on "Update personal information":</p>
                    <ul class="list-disc">
                        <li>
                            I have read and agree to{" "}
                            <a
                                href="/doc/Politique_de_discipline_EN.pdf"
                                target="_blank"
                                class="text-blue-500"
                            >
                                the CREIQ disciplinary policy.
                            </a>
                        </li>
                        <li>
                            I have read and agree to{" "}
                            <a
                                href="/doc/Politique_BIPCV.pdf"
                                target="_blank"
                                class="text-blue-500"
                            >
                                the BIPCV code of conduct.
                            </a>
                        </li>
                        <li>
                            I have read and agree to{" "}
                            <a
                                href="/doc/Rulebook_QEC_EN.pdf"
                                target="_blank"
                                class="text-blue-500"
                            >
                                the CQI rules.
                            </a>
                        </li>
                        <li>
                            I consent to my image in photographs, as well as my
                            voice and image in video recordings, being used for
                            any type of promotion of CQI or CREIQ.
                        </li>
                        <li>
                            I consent to my email address being shared with
                            Génium, who may send me promotional offers. It will
                            be possible to unsubscribe from this mailing list at
                            any time after the competition.
                        </li>
                    </ul>
                </div>
            )}

            <div class="flex flex-col items-center justify-center">
                <button
                    type="submit"
                    class="flex w-fit justify-center rounded-md bg-light-highlight px-5 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-light-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-highlight"
                >
                    Mettre à jour les renseignements personnels
                </button>
                <SubmitError error={error} />
                <SubmitSuccess success={success} />
            </div>
        </Form>
    )
}
