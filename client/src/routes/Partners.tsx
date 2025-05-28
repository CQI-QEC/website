import FixedImage from "../components/FixedImage"
import NavHeader from "../components/NewHeader"
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

    const description: any = {
        "marmen.png": "Marmen",
        "aep.png": "AEP",
        "cascades.png": "Cascades",
        "oiq.png": "OIQ",
        "genium360.png": "Genium360",
        "excelpro.png": "Excelpro",
        "lotoquebec.png": "Loto-Quebec",
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
            <NavHeader />
            <FixedImage url="/banners/partner.jpg" height="28rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {t("partners")}
                </h1>
            </FixedImage>

            <div class="flex w-full flex-col items-center gap-4 px-16">
                <div class="mt-4 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
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
                                    <a
                                        href={
                                            description[partner] &&
                                            "/partners/" + description[partner]
                                        }
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
