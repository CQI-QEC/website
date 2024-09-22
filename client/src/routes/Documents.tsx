import FixedImage from "../components/FixedImage";
import { P } from "../components/Text";
import { t } from "../stores/locale";

const Documents = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="font-futur text-white text-center text-6xl">Documents</h1>
            </FixedImage>
            <div class="-mt-32 h-full w-full flex flex-row items-center justify-center p-4 gap-4 font-futur text-xl font-bold">
                <P>{t("documents.description")}</P>
            </div>
        </div>
    )
};

export default Documents;
