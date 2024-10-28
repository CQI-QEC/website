import FixedImage from "../components/FixedImage"
import { AdditionalInfoForm } from "../components/forms/AdditionnalInfoForm"
import { ProtectedRoute } from "../components/ProtectedRoute"
import Goback from "../components/ReturnDashboard"

export default function AdditionalForm() {
    return (
        <ProtectedRoute>
            <div class="flex w-full flex-col items-center justify-center">
                <FixedImage url="/banners/documents.svg" height="32rem">
                    <h1 class="text-center font-futur text-6xl text-white">
                        {"Tableau de bord"}
                    </h1>
                </FixedImage>
                <div class="relative -mt-32 flex w-full flex-col items-center">
                    <Goback />
                    <AdditionalInfoForm />
                </div>
            </div>
        </ProtectedRoute>
    )
}
