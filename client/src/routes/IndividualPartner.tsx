import { useParams } from "@solidjs/router"
import FixedImage from "../components/FixedImage"
import PrefetchLink from "../components/PrefetchLink"
import { CaretCircleLeft } from "phosphor-solid-js"
import { t } from "../stores/locale"
import NavHeader from "../components/Header"

export default function Dashboard() {
    const params = useParams()
    const partnerName = params.name
    let translation:string;
    switch (partnerName) {
        // case "OIQ":
        //     translation = t("individual.OIQ");
        //     break;
        case "Genium360":
            translation = t("individual.Genium360");
            break;
        case "Hatch":
            translation = t("individual.Hatch");
            break;
        default:
            return <div class="flex w-full flex-col items-center justify-center">
                <NavHeader background={true}/>
                <FixedImage url="/banners/documents.svg" height="32rem">
                    <h1 class="text-center font-futur text-6xl">
                        {t("individual.notfound.title")}
                    </h1>
                </FixedImage>
                <div class="relative -mt-32 flex h-full w-full flex-col items-center justify-center gap-4 p-4 lg:text-justify font-futur text-xl font-bold">
                    <PrefetchLink
                        to="/partners"
                        file="Dashboard"
                        class="absolute left-8 top-0 flex flex-row items-center gap-2"
                    >
                        <CaretCircleLeft size="2rem" />
                        <span>{t("dashboard.goback")}</span>
                    </PrefetchLink>
                    <p class="pt-4 text-xl md:w-1/2">{t("individual.notfound.description")}</p>
                </div>
            </div>
    }

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <NavHeader background={true}/>
            
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl">
                    {partnerName}
                </h1>
            </FixedImage>

            <div class="relative -mt-32 flex h-full w-full flex-col items-center justify-center gap-4 p-4 lg:text-justify font-futur text-xl font-bold">
                <PrefetchLink
                    to="/partners"
                    file="Dashboard"
                    class="absolute left-8 top-0 flex flex-row items-center gap-2"
                >
                    <CaretCircleLeft size="2rem" />
                    <span>{t("dashboard.goback")}</span>
                </PrefetchLink>

                {
                    translation.split("\n").map((line: string, _index: number) => (
                        <p class="pt-4 text-xl md:w-1/2">{line}</p>
                    ))
                }
            </div>
        </div>
    )
}
