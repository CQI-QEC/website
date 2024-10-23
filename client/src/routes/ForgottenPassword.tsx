import FixedImage from "../components/FixedImage"
import { EmailResetForm } from "../components/forms/EmailResetForm"
import { t } from "../stores/locale"

export default function ForgottenPassword() {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {t("loginPage.forgotPassword")}
                </h1>
            </FixedImage>
            <div class="-mt-32 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                <EmailResetForm />
            </div>
        </div>
    )
}
