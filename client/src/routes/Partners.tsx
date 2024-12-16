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
        or: [
            "alstom.jpg",
            "cascades.png",
            "excelpro.png", // Added .png extension
            "oiq.png",
        ],
        argent: ["lotoquebec.png", "marmen.png"],
        bronze: ["exp.png"],
        officiel: ["genium360.png"],
    }

    // Order of tiers to display
    const tiers = ["officiel", "platine", "diamant", "or", "argent", "bronze"]

    // Image sizes for each tier
    const tierImageSizes: any = {
        officiel: "36",
        platine: "18",
        diamant: "16",
        or: "10",
        argent: "6",
        bronze: "4",
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

            <div class="flex flex-col items-center gap-4">
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

                <div class="flex flex-col gap-8">
                    {tiers.map((tier) => (
                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl font-bold">
                                {tierTitles[tier]}
                            </h2>
                            <div class="flex flex-wrap gap-8">
                                {partners[tier].map((partner: any) => (
                                    <img
                                        src={`/partners/${tier}/${partner}`}
                                        alt={partner}
                                        style={`width: ${tierImageSizes[tier]}rem;`}
                                        class={`object-contain`}
                                    />
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
