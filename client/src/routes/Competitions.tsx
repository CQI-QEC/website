import { t } from "../stores/locale";

const Competition = () => {
    return (
        <div class="flex w-full flex-col items-start justify-center">
            <h2 class="text-3xl font-bold">{t("competitionsPage.competitions")}</h2>
        </div>
    )
};

export default Competition;
