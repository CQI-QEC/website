import { CaretCircleLeft } from "phosphor-solid-js"
import FixedImage from "../components/FixedImage"
import ParticipantAdditionnalInfo from "../components/ParticipantAdditionnalInfo"
import PrefetchLink from "../components/PrefetchLink"
import { ProtectedRoute } from "../components/ProtectedRoute"
import { t } from "../stores/locale"

export default function ParticipantInfo() {
    return (
        <ProtectedRoute>
            <div class="flex w-full flex-col items-center justify-center font-futur">
                <FixedImage url="/banners/documents.svg" height="32rem">
                    <h1 class="text-center font-futur text-6xl text-white">
                        {"Tableau de bord"}
                    </h1>
                </FixedImage>
                <div class="relative -mt-32 flex w-full flex-col items-center">
                    <PrefetchLink
                        to="/list-participant"
                        file="Dashboard"
                        class="absolute left-8 top-0 flex flex-row items-center gap-2"
                    >
                        <CaretCircleLeft size="2rem" />
                        <span>{t("dashboard.goback")}</span>
                    </PrefetchLink>
                    <ParticipantAdditionnalInfo />
                </div>
            </div>
        </ProtectedRoute>
    )
}
