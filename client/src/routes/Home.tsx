import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import SectionTitle from "../components/SectionTitle";
import { P } from "../components/Text";
import { t } from "../stores/locale";

const Home = () => {
    return (
        <div class="flex w-full flex-col">
            <FixedImage url="/banners/home.svg" height="48rem">
                <p class="font-futur text-2xl text-green-400">{t("homePage.edition")}</p>
                <h1 class="font-futur text-white text-center text-6xl" style="word-spacing: 100vw;">{t("homePage.cqi")}</h1>
                <p class="font-futur text-green-400 text-2xl">{t("homePage.location")}</p>
            </FixedImage>
            <div class="-mt-16 flex flex-col gap-4">
                <div class="flex flex-col p-4 gap-4">
                    <SectionTitle title={t("aboutPage.about")}></SectionTitle>
                    <P>{t("homePage.description")}</P>
                </div>
                <img src="/banners/infographie.svg" width="100%" />
                <Countdown />
            </div>
        </div>
    )
};

export default Home;
