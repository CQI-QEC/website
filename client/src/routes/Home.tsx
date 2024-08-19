import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import SectionTitle from "../components/SectionTitle";
import { P } from "../components/Text";
import { t } from "../stores/locale";

const Home = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/competition/home.webp">
                <p class="font-futur text-2xl text-green-400">40e édition</p>
                <h1 class="font-futur text-white text-center text-6xl" style="word-spacing: 100vw;">{t("homePage.cqi")}</h1>
                <p class="font-futur text-green-400 text-2xl">16 au 19 janvier 2025 | Polytechnique Montréal</p>
            </FixedImage>
            <div class="flex flex-col p-4 gap-4">
                <SectionTitle title={t("aboutPage.about")}></SectionTitle>
                <P>{t("aboutPage.description")}</P>
            </div>
            <Countdown />
        </div>
    )
};

export default Home;
