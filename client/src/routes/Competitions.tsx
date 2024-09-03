import Card from "../components/Card";
import FixedImage from "../components/FixedImage";
import { H3, P, P2 } from "../components/Text";
import { t } from "../stores/locale";

const Competition = () => {
    const competitions = [
        "senior",
        "junior",
        "debate",
        "reengineering",
        "consulting",
        "scientific",
        "programming",
        "design",
        "superiorcycle",
    ];
    return (
        <div>
            <FixedImage url="/competition/home.webp">
                <h1 class="font-futur text-white text-center text-6xl">{t("competitionsPage.competitions")}</h1>
            </FixedImage>
            <div class="flex w-full flex-col items-center justify-center gap-4 p-8 text-center">
                <P>{t("competitionsPage.description")}</P>
                <div class="flex w-full flex-row flex-wrap gap-4 items-start justify-around">
                    {
                        competitions.map((competition) => {
                            return (
                                <Card theme="w-5/12" img={"/competition/" + competition + ".jpg"}>
                                   <H3>{t(("competitionsPage." + competition + ".title") as any)}</H3>
                                    <P2>{t(("competitionsPage." + competition + ".description") as any)}</P2>
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
