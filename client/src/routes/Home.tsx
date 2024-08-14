import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import SectionTitle from "../components/SectionTitle";
import { P } from "../components/Text";
import { t } from "../stores/locale";

const Home = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage></FixedImage>
            <SectionTitle title={t("aboutPage.about")}></SectionTitle>
            <P>{t("aboutPage.description")}</P>
            <Countdown />
        </div>
    )
};

export default Home;
