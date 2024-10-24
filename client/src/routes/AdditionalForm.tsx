import FixedImage from "../components/FixedImage"
import { AdditionalInfoForm } from "../components/forms/AdditionnalInfoForm"
import { ProtectedRoute } from "../components/ProtectedRoute"

export default function AdditionalForm() {
    return (
        <ProtectedRoute>
            <div class="flex w-full flex-col items-center justify-center">
                <FixedImage url="/banners/documents.svg" height="32rem">
                    <h1 class="text-center font-futur text-6xl text-white">
                        {"Tableau de bord"}
                    </h1>
                </FixedImage>
                <div class="-mt-32 flex flex-col items-center">
                    <AdditionalInfoForm />
                </div>
            </div>
        </ProtectedRoute>
    )
}
