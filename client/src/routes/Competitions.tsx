import Card from "../components/Card";
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
        <div class="flex w-full flex-col items-center justify-center gap-4">
            <h2 class="text-3xl font-bold">{t("competitionsPage.competitions")}</h2>
            <p class="text-xl font-bold tracking-tight">{t("competitionsPage.description")}</p>
            <div class="flex w-full flex-row flex-wrap gap-4 items-start justify-around">
                {
                    competitions.map((competition) => {
                        return (
                            <Card theme="w-5/12" img={"/competition/" + competition + ".jpg"}>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition">
                                    {t(("competitionsPage." + competition + ".title") as any)}
                                </h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400 transition">
                                    {t(("competitionsPage." + competition + ".description") as any)}
                                </p>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    )
};

export default Competition;
