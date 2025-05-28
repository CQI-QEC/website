import { CaretDoubleDown } from "phosphor-solid-js";
import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import SectionTitle from "../components/SectionTitle";
import { P } from "../components/Text";
import { t } from "../stores/locale";
import NavHeader from "../components/NewHeader";

const scrollToMore = () => {
    const moreSection = document.getElementById("more");
    if (moreSection) {
        moreSection.scrollIntoView({ behavior: "smooth" });
    }
}

const Home = () => {

    return (
        <div class="flex w-full flex-col">
            <NavHeader />
            <FixedImage url="/campus2.jpg" extra_classes="h-[100vh] justify-center items-center">
                <div class="h-60">
                    {/* TODO: Fix so its always in the center instead of "random" 60px */}
                </div>
                <p class="font-futur text-2xl text-emerald-400">{t("homePage.edition")}</p>
                <h1 class="font-futur text-white text-center text-6xl" style="word-spacing: 100vw;">{t("homePage.cqi")}</h1>
                <p class="font-futur text-emerald-400 text-2xl">{t("homePage.location")}</p>
                <a class="animate-bounce font-futur text-2xl mt-auto mb-20 cursor-pointer" onClick={scrollToMore}>
                    <CaretDoubleDown size={32} weight="bold" class="text-emerald-400" />
                </a>
            </FixedImage>
            <div class="mt-8 flex flex-col gap-4" id="more">
                <div class="flex flex-col px-32 gap-4">
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
