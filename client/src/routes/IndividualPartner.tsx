import { useParams } from "@solidjs/router"
import FixedImage from "../components/FixedImage"
import PrefetchLink from "../components/PrefetchLink"
import { CaretCircleLeft } from "phosphor-solid-js"
import { t } from "../stores/locale"
import NavHeader from "../components/Header"
import globalInfoNumbers from "../stores/globalInfoNumbers"

export default function Dashboard() {
    const params = useParams()
    const partnerName = params.name
    const partnerDescriptions: any = {
        // Marmen: 
        //  "Marmen est reconnue pour ses services d’usinage de haute précision, de fabrication et d’assemblage mécanique, de conception et d’ingénierie et est aussi l’un des plus importants fabricants de tours d’éoliennes en Amérique du Nord. Marmen dessert de nombreux marchés, notamment : le spatial, l’hydroélectricité, le nucléaire, défense et militaire, le pétrole et gaz, l’aviation, les mines et aciéries et plusieurs autres. Travailler chez Marmen, c’est faire partie d’une équipe gagnante qui propose des solutions innovantes. Évoluez dans un milieu convivial favorisant le travail d’équipe et le développement du potentiel de chacun!",
        OIQ: 
            "Avec plus de 72 000 membres et futur.e.s membres, l’Ordre des ingénieurs du Québec se classe au 2e rang d’importance parmi les 46 ordres professionnels de la province. L’Ordre a pour mission d’encadrer la pratique des ingénieurs et ingénieures et de soutenir la profession afin d’assurer la protection du public. Plus largement, il constitue à la fois l’instance de régulation et la vitrine du génie québécois.",
        Genium360:
            `La Compétition Québécoise d’Ingénierie (CQI) est bien plus qu’un défi : c’est une occasion unique pour les esprits novateurs de démontrer leur ingéniosité, leur rigueur et leur créativité. Genium360, partenaire officiel de cette ${globalInfoNumbers.EDITION_NUMBER}e édition, est honorée de célébrer cette relève talentueuse qui façonne l’avenir du génie au Québec.`,
        }

    const description =
        partnerDescriptions[partnerName as any] || "Description not available."
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <NavHeader background={true}/>
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl">
                    {partnerName}
                </h1>
            </FixedImage>
            <div class="relative -mt-32 flex h-full w-full flex-col items-center justify-center gap-4 p-4 text-justify font-futur text-xl font-bold">
                <PrefetchLink
                    to="/partners"
                    file="Dashboard"
                    class="absolute left-8 top-0 flex flex-row items-center gap-2"
                >
                    <CaretCircleLeft size="2rem" />
                    <span>{t("dashboard.goback")}</span>
                </PrefetchLink>
                <p class="pt-8 text-xl md:w-1/2">{description}</p>
            </div>
        </div>
    )
}
