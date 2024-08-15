import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import SectionTitle from "../components/SectionTitle";
import { P } from "../components/Text";
import { t } from "../stores/locale";

const Home = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage></FixedImage>
            <div class="flex flex-col p-4 gap-4">
                <SectionTitle title={t("aboutPage.about")}></SectionTitle>
                <P>{t("aboutPage.description")}</P>
            </div>
            <Countdown />
        </div>
    )
};

export default Home;
