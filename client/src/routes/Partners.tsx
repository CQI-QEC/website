import clsx from "clsx"
import FixedImage from "../components/FixedImage"
import { H1 } from "../components/Text"
import { t } from "../stores/locale"

const Partners = () => {
    // Define the partner tiers and their respective logos
    const partners: any = {
        diamant: ["hatch.jpg"],
        platine: [
            "abb.png",
            "aep.png",
            "polytechnique.png",
            "prattwhitney.png",
        ],
        or: ["alstom.jpg", "cascades.png", "excelpro.png", "oiq.png"],
        argent: ["lotoquebec.png", "marmen.png"],
        bronze: ["exp.png"],
        officiel: ["genium360.png"],
    }

    // Descriptions for partners
    const partnerDescriptions: any = {
        "marmen.png":
            "Marmen est reconnue pour ses services d’usinage de haute précision, de fabrication et d’assemblage mécanique, de conception et d’ingénierie et est aussi l’un des plus importants fabricants de tours d’éoliennes en Amérique du Nord. Marmen dessert de nombreux marchés, notamment : le spatial, l’hydroélectricité, le nucléaire, défense et militaire, le pétrole et gaz, l’aviation, les mines et aciéries et plusieurs autres. Travailler chez Marmen, c’est faire partie d’une équipe gagnante qui propose des solutions innovantes. Évoluez dans un milieu convivial favorisant le travail d’équipe et le développement du potentiel de chacun!",
        "aep.png":
            "L'Association étudiante de Polytechnique (AEP) est l’organisation qui représente et soutient les personnes étudiantes au premier cycle de Polytechnique Montréal. L’AEP se distingue par son rôle central dans la vie académique, sociale et culturelle de ses membres. Elle est responsable de promouvoir les droits et intérêts des étudiants, de renforcer la communication entre ceux-ci et l’administration, ainsi que de favoriser leur épanouissement sur les plans personnel et professionnel.",
        "cascades.png":
            "Cascades est une entreprise canadienne reconnue pour ses solutions novatrices en matière de récupération, de fabrication de produits d'emballage et de papiers tissus écologiques. Avec plusieurs unités à travers l’Amérique du Nord, Cascades s'engage à promouvoir des pratiques durables et respectueuses de l'environnement. L'entreprise est un acteur majeur dans les secteurs de l'emballage pour les aliments, la protection des produits et les solutions d'hygiène, contribuant ainsi à un avenir plus vert et durable. Respectez votre nature!",
        "oiq.png":
            "Avec plus de 72 000 membres et futur.e.s membres, l’Ordre des ingénieurs du Québec se classe au 2e rang d’importance parmi les 46 ordres professionnels de la province. L’Ordre a pour mission d’encadrer la pratique des ingénieurs et ingénieures et de soutenir la profession afin d’assurer la protection du public. Plus largement, il constitue à la fois l’instance de régulation et la vitrine du génie québécois.",
        "genium360.png":
            "La Compétition Québécoise d’Ingénierie (CQI) est bien plus qu’un défi : c’est une occasion unique pour les esprits novateurs de démontrer leur ingéniosité, leur rigueur et leur créativité. Genium360, partenaire officiel de cette 40e édition, est honorée de célébrer cette relève talentueuse qui façonne l’avenir du génie au Québec.",
        "excelpro.png":
            "Excelpro est un intégrateur de systèmes automatisés, un entrepreneur électrique et un fabricant de panneaux de contrôle. Sa filière Génik tant qu'à elle répond aux défis de production en concevant et en fabriquant des équipements robotisés et automatisés sur mesure, alliant qualité et innovation. Ensemble, Excelpro et Génik contribuent à créer l'industrie de demain.",
        "lotoquebec.png":
            "Fondée en 1969, Loto-Québec a pour mission d’encadrer les jeux de hasard et d’argent, tout en les soustrayant au contrôle du crime organisé. Aujourd’hui, nous proposons bien plus qu’une gamme de jeux : des hôtels, restaurants, bars, salles de spectacles, une boîte de nuit et même l’un des plus beaux terrains de golf en Amérique du Nord! Et puisque 100 % de nos profits retournent à la collectivité, quand les Québécois jouent avec nous, c’est tout le Québec qui gagne!",
    }

    // Order of tiers to display
    const tiers = ["officiel", "diamant", "platine", "or", "argent", "bronze"]

    // Image sizes for each tier
    const tierImageSizes: any = {
        officiel: "8",
        diamant: "6",
        platine: "4",
        or: "3.5",
        argent: "3",
        bronze: "2",
    }

    // Titles for each tier
    const tierTitles: any = {
        diamant: "Partenaires Diamant",
        platine: "Partenaires Platine",
        or: "Partenaires Or",
        argent: "Partenaires Argent",
        bronze: "Partenaires Bronze",
        officiel: "Partenaires Officiel",
    }

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/partner.svg" height="28rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {t("partners")}
                </h1>
            </FixedImage>

            <div class="flex w-full flex-col items-center gap-4 px-16">
                <div class="-mt-4 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                    <a
                        href="/doc/Plan de partenariat 2025 FR.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Plan de partenariat FR
                    </a>
                    <a
                        href="/doc/Plan de partenariat 2025 EN.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Sponsorship Plan EN
                    </a>
                </div>
                <H1>Partenaires de la CQI 2025</H1>

                <div class="flex w-full flex-col gap-8">
                    {tiers.map((tier) => (
                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl font-bold">
                                {tierTitles[tier]}
                            </h2>
                            <div class="flex flex-wrap gap-8">
                                {partners[tier].map((partner: any) => (
                                    <div
                                        class={clsx(
                                            "group relative w-full max-w-xs",
                                            partnerDescriptions[partner] &&
                                                "transition-all duration-1000 ease-linear hover:h-72",
                                        )}
                                    >
                                        <img
                                            src={`/partners/${tier}/${partner}`}
                                            alt={partner}
                                            style={
                                                "height:" +
                                                tierImageSizes[tier] +
                                                "rem"
                                            }
                                            class="object-contain"
                                        />
                                        {partnerDescriptions[partner] && (
                                            <div class="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                <div class="rounded-lg bg-white p-4 shadow-lg">
                                                    <p class="text-sm">
                                                        {
                                                            partnerDescriptions[
                                                                partner
                                                            ]
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
