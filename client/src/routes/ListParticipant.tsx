import FixedImage from "../components/FixedImage"
import ParticipantForm from "../components/forms/ParticipantForm"
import { ProtectedRoute } from "../components/ProtectedRoute"
import Goback from "../components/ReturnDashboard"

export default function ListParticipant() {
    return (
        <ProtectedRoute>
            <div class="flex w-full flex-col items-center justify-center">
                <FixedImage url="/banners/documents.svg" height="32rem">
                    <h1 class="text-center font-futur text-6xl text-white">
                        Tableau de bord
                    </h1>
                </FixedImage>
                <div class="relative -mt-32 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                    <Goback />
                    <div class="mt-16 overflow-x-auto">
                        <ParticipantForm />
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}
