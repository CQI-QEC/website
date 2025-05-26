import Card from "../components/Card";
import FixedImage from "../components/FixedImage";
import { H3, P, P2 } from "../components/Text";
import { t } from "../stores/locale";

interface Competition {
    name: string;
    driveLink?: string;
}

const Competition = () => {
    const competitions: Competition[] = [
        { name: "senior"},
        { name: "junior" },
        { name: "debate" },
        { name: "reengineering" },
        { name: "consulting" },
        { name: "scientific" },
        { name: "programming" },
        { name: "design" },
        { name: "superiorcycle" },
    ];
    return (
        <div>
            <FixedImage url="/banners/competitions.svg" height="36rem" extra_classes="justify-center items-center">
                <h1 class="font-futur text-white text-center text-6xl">{t("competitionsPage.competitions")}</h1>
            </FixedImage>
            <div class="flex w-full flex-col items-center justify-center gap-4 p-8 w-1/3 text-center">
                <P>{t("competitionsPage.description")}</P>
                <div class="grid grid-flow-row grid-cols-1 gap-8 md:w-3/5">
                    {
                        competitions.map((competition) => {
                            return (
                                <Card theme="w-full" img={"/competition/" + competition.name + ".webp"}>
                                    <H3>{t(("competitionsPage." + competition.name + ".title") as any)}</H3>
                                    <P2>{t(("competitionsPage." + competition.name + ".description") as any)}</P2>
                                    {/* { competition.driveLink ? <a href={competition.driveLink}>Lien Drive!</a> : null }  */}
                                </Card>
                                
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Competition;
