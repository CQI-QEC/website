import { useParams } from "@solidjs/router"
import FixedImage from "../components/FixedImage"
import Goback from "../components/ReturnDashboard"
import PrefetchLink from "../components/PrefetchLink"
import { CaretCircleLeft } from "phosphor-solid-js"
import { t } from "../stores/locale"
import NavHeader from "../components/NewHeader"

export default function Dashboard() {
    const params = useParams()
    const partnerName = params.name
    const partnerDescriptions: any = {
        Marmen: "Marmen est reconnue pour ses services d’usinage de haute précision, de fabrication et d’assemblage mécanique, de conception et d’ingénierie et est aussi l’un des plus importants fabricants de tours d’éoliennes en Amérique du Nord. Marmen dessert de nombreux marchés, notamment : le spatial, l’hydroélectricité, le nucléaire, défense et militaire, le pétrole et gaz, l’aviation, les mines et aciéries et plusieurs autres. Travailler chez Marmen, c’est faire partie d’une équipe gagnante qui propose des solutions innovantes. Évoluez dans un milieu convivial favorisant le travail d’équipe et le développement du potentiel de chacun!",
        AEP: "L'Association étudiante de Polytechnique (AEP) est l’organisation qui représente et soutient les personnes étudiantes au premier cycle de Polytechnique Montréal. L’AEP se distingue par son rôle central dans la vie académique, sociale et culturelle de ses membres. Elle est responsable de promouvoir les droits et intérêts des étudiants, de renforcer la communication entre ceux-ci et l’administration, ainsi que de favoriser leur épanouissement sur les plans personnel et professionnel.",
        Cascades:
            "Cascades est une entreprise canadienne reconnue pour ses solutions novatrices en matière de récupération, de fabrication de produits d'emballage et de papiers tissus écologiques. Avec plusieurs unités à travers l’Amérique du Nord, Cascades s'engage à promouvoir des pratiques durables et respectueuses de l'environnement. L'entreprise est un acteur majeur dans les secteurs de l'emballage pour les aliments, la protection des produits et les solutions d'hygiène, contribuant ainsi à un avenir plus vert et durable. Respectez votre nature!",
        OIQ: "Avec plus de 72 000 membres et futur.e.s membres, l’Ordre des ingénieurs du Québec se classe au 2e rang d’importance parmi les 46 ordres professionnels de la province. L’Ordre a pour mission d’encadrer la pratique des ingénieurs et ingénieures et de soutenir la profession afin d’assurer la protection du public. Plus largement, il constitue à la fois l’instance de régulation et la vitrine du génie québécois.",
        Genium360:
            "La Compétition Québécoise d’Ingénierie (CQI) est bien plus qu’un défi : c’est une occasion unique pour les esprits novateurs de démontrer leur ingéniosité, leur rigueur et leur créativité. Genium360, partenaire officiel de cette 40e édition, est honorée de célébrer cette relève talentueuse qui façonne l’avenir du génie au Québec.",
        Excelpro:
            "Excelpro est un intégrateur de systèmes automatisés, un entrepreneur électrique et un fabricant de panneaux de contrôle. Sa filière Génik tant qu'à elle répond aux défis de production en concevant et en fabriquant des équipements robotisés et automatisés sur mesure, alliant qualité et innovation. Ensemble, Excelpro et Génik contribuent à créer l'industrie de demain.",
        "Loto-Quebec":
            "Fondée en 1969, Loto-Québec a pour mission d’encadrer les jeux de hasard et d’argent, tout en les soustrayant au contrôle du crime organisé. Aujourd’hui, nous proposons bien plus qu’une gamme de jeux : des hôtels, restaurants, bars, salles de spectacles, une boîte de nuit et même l’un des plus beaux terrains de golf en Amérique du Nord! Et puisque 100 % de nos profits retournent à la collectivité, quand les Québécois jouent avec nous, c’est tout le Québec qui gagne!",
    }

    const description =
        partnerDescriptions[partnerName as any] || "Description not available."
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <NavHeader />
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl text-white">
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
