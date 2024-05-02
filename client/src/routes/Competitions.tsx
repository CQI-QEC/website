import Card from "../components/Card";
import { H2, H3, P, P2 } from "../components/Text";
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
        <div class="flex w-full flex-col items-start justify-center gap-4">
            <H2>{t("competitionsPage.competitions")}</H2>
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
    )
};

export default Competition;
