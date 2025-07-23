import FixedImage from "../components/FixedImage"
import NavHeader from "../components/Header"
import { H1 } from "../components/Text"
import { t } from "../stores/locale"

interface Partner {
    name: string;
    logo: string;
    //description?: string; Not used présentement
}

const Partners = () => {
    // Define the partner tiers and their respective logos
    const partners: Map<string, Partner[]> = new Map();
    partners.set("diamant", []);
    partners.set("platine", []);
    partners.set("or", [
        { name: "Ordre des ingénieurs du Québec (OIQ)", logo: "oiq.png"},
        { name: "Association générale des étudiants hors campus de l'UQTR (AGEHC)", logo: "agehc.png" },
    ]);
    partners.set("argent", [
        { name: "Loto-Québec", logo: "lotoquebec.png" }
    ]);
    partners.set("bronze", [
        { name: "Microbird", logo: "microbird.svg" },
        { name: "Regroupement étudiant en Ingénierie de Drummondville (RÉID)", logo: "reid.webp" },
    ]);
    partners.set("officiel", [
        { name: "Genium360", logo: "genium360.png"},
        // { name: "Marmen", logo: "marmen.png" }, // Uncomment if needed
    ]);
    partners.set("autre", [
        { name: "Alten", logo: "alten.svg" },
        { name: "Fondation UQTR", logo: "fondation.png" },
    ]);

    // Pour la page des partenaires individuels
    const description: any = {
        // "marmen.png": "Marmen",
        "oiq.png": "OIQ",
        "genium360.png": "Genium360",
        "lotoquebec.png": "Loto-Quebec",
    }

    // Order of tiers to display
    const tiers = ["officiel", "diamant", "platine", "or", "argent", "bronze", "autre"]

    // Image sizes for each tier
    const tierImageSizes: any = {
        officiel: "8",
        diamant: "6",
        platine: "5",
        or: "5",
        argent: "5",
        bronze: "5",
        autre: "5",
    }

    // Titles for each tier
    const tierTitles: any = {
        diamant: "Partenaires Diamant",
        platine: "Partenaires Platine",
        or: "Partenaires Or",
        argent: "Partenaires Argent",
        bronze: "Partenaires Bronze",
        autre: "Partenaires",
        officiel: "Partenaires Officiel",
    }

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <NavHeader background={true}/>
            <FixedImage url="/banners/partner.jpg" height="28rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {t("partners")}
                </h1>
            </FixedImage>

            <div class="flex w-full flex-col items-center gap-4 px-16">
                <div class="mt-4 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                    <a
                        href="/doc/Plan de partenariat 2026 FR.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Plan de partenariat FR
                    </a>
                    <a
                        href="/doc/Partnership plan 2026 EN.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Sponsorship Plan EN
                    </a>
                </div>
                <H1>{t("partnersPage.header")}</H1>

                <div class="flex w-full flex-col gap-8 mb-8">
                    {tiers.map((tier) => (
                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl font-bold">
                                {tierTitles[tier]}
                            </h2>
                            <div class="flex flex-wrap gap-8">
                                {partners.get(tier)?.map((partner: Partner) => (
                                    <a
                                        href={
                                            description[partner.logo] &&
                                            "/partners/" + description[partner.logo]
                                        }
                                        class="tooltip"
                                    >
                                        <span class="tooltiptext">{partner.name}</span>
                                        <img
                                            src={`/partners/${tier}/${partner.logo}`}
                                            alt={partner.name}
                                            style={
                                                "height:" +
                                                tierImageSizes[tier] +
                                                "rem"
                                            }
                                            class="object-contain"
                                        />
                                    </a>
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
