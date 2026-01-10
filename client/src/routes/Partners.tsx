import FixedImage from "../components/FixedImage"
import NavHeader from "../components/Header"
import PartnerCard from "../components/PartnerCardWIP";
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
    partners.set("diamant", [
        { name: "Hatch", logo: "hatch.png", },
        { name: "Pratt", logo: "pratt.png" },
        { name: "UQTR", logo: "uqtr.png" },
    ]);
    partners.set("platine", [
        { name: "Fempro", logo: "fempro.png" },
    ]);
    partners.set("or", [
        { name: "Ordre des ingénieurs du Québec (OIQ)", logo: "oiq.png"},
        { name: "Association générale des étudiants hors campus de l'UQTR (AGEHC)", logo: "agehc.png" },
    ]);
    partners.set("argent", [
        { name: "Loto-Québec", logo: "lotoquebec.png" },
        { name: "EXCELPRO / GÉNIK", logo: "excelpro.png" },
        { name: "EXP", logo: "exp.png" },
    ]);
    partners.set("bronze", [
        { name: "Microbird", logo: "microbird.svg" },
        { name: "Regroupement étudiant en Ingénierie de Drummondville (RÉID)", logo: "reid.webp" },
    ]);
    partners.set("officiel", [
        { name: "Genium360", logo: "genium360.png"}
    ]);

    partners.set("autre", [
        { name: "Alten", logo: "alten.svg" },
        { name: "Fondation UQTR", logo: "fondation.png" },
        { name: "École d'ingénierie UQTR", logo: "ecole_ingenierie_uqtr.png" },
        { name: "BBA", logo: "bba.png" },
        { name: "Premier Tech", logo: "premiertech.png" },
        { name: "Machinex", logo: "machinex.png" },
    ]);

    const description: any = {
        "hatch.png": "Hatch",
        "oiq.png": "OIQ",
        "genium360.png": "Genium360"
    }

    // Order of tiers to display
    const tiers = ["officiel", "diamant", "platine", "or", "argent", "bronze", "autre"]

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
                <div class="bg-black h-2 w-1/2"></div>

                <div class="flex justify-center items-center w-full xl:w-3/5 flex-col justify-center gap-8 mb-8">
                    {tiers.map((tier) => (
                        <>{
                            // Only display the tier if there are partners in it
                            partners.get(tier) && partners.get(tier)!.length > 0 ? (
                                <div class="flex flex-col gap-4 items-center justify-center items-center">
                                    <h2 class="text-2xl font-bold">
                                        {tierTitles[tier]}
                                    </h2>
                                    <div class="flex flex-wrap gap-8 justify-center items-center">
                                        {partners.get(tier)?.map((partner: Partner) => (
                                            <PartnerCard 
                                            small={false} 
                                            img={"/partners/" + tier + "/" + partner.logo} 
                                            extra_classes=" tooltip" name={partner.name} 
                                            link={description[partner.logo] ? ("/partners/" + description[partner.logo]) : undefined}/>
                                        ))}
                                    </div>
                                </div>
                            ) : null
                        }</>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
