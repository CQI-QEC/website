import { CaretDoubleDown } from "phosphor-solid-js";
import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import { P, H3, P3 } from "../components/Text";
import { t } from "../stores/locale";
import NavHeader from "../components/Header";
import ExternalLink from "../components/ExternalLink";
import ImageDisplay from "../components/ImageDisplay";

const scrollToAbout = () => {
    const moreSection = document.getElementById("about");
    if (moreSection) {
        moreSection.scrollIntoView({ behavior: "smooth" });
    }
}
const asso = [
    {asso: "aeets", url: "https://www.aeets.com/"},
    {asso: "aeg", url: "http://aeg.uqac.ca/"},
    {asso: "aep", url: "https://www.aep.polymtl.ca/"},
    {asso: "aesgul", url: "https://www.aesgul.com/"},
    {asso: "ageg", url: "https://www.ageg.ca/"},
    {asso: "assitr", url: "https://assitr.ca/"},
    {asso: "bess", url: "https://www.bessmcgill.com/"},
    {asso: "eca", url: "https://ecaconcordia.ca/"},
    {asso: "eus", url: "https://mcgilleus.ca/"},
    {asso: "regaaul", url: "https://www.facebook.com/regaaulaval/"},
    {asso: "reid", url: "https://www.facebook.com/REIDUQTR/"},
    {asso: "rgegr", url: "https://rgegr.uqar.ca/"},
    {asso: "seegat", url: "https://www.facebook.com/seegat/"},
    {asso: "uqo", url: "https://uqo.ca/vie-etudiante/associations-regroupements-comites-0"},
];
const universities = [
    {uni: "uqat", url: "https://www.uqat.ca/"},
    {uni: "uqo", url: "https://uqo.ca/"},
    {uni: "uqtr", url: "https://www.uqtr.ca/"},
    {uni: "mcgill", url: "https://www.mcgill.ca/"},
    {uni: "concordia", url: "https://www.concordia.ca/"},
    {uni: "ets", url: "https://www.etsmtl.ca/"},
    {uni: "poly", url: "https://www.polymtl.ca/"},
    {uni: "ulaval", url: "https://www.ulaval.ca/"},
    {uni: "sherb", url: "https://www.usherbrooke.ca/"},
    {uni: "uqac", url: "https://www.uqac.ca/"},
    {uni: "macdonald", url: "https://www.mcgill.ca/macdonald/"},
    {uni: "uqar", url: "https://www.uqar.ca/"},
];

const Home = () => {

    return (
        <div class="flex w-full flex-col">
            <NavHeader background={true}/>
            <FixedImage url="/home.jpg" extra_classes="h-[100vh] justify-center items-center">
                <div class="flex flex-col items-center justify-center my-auto">
                    <p class="font-futur text-2xl text-emerald-400">{t("homePage.edition")}</p>
                    <h1 class="font-futur text-white text-center text-6xl" style="word-spacing: 100vw;">{t("homePage.cqi")}</h1>
                    <p class="font-futur text-emerald-400 text-2xl text-wrap">{t("homePage.location")}</p>
                    <p class="font-futur text-emerald-400 text-2xl text-wrap">{t("homePage.date")}</p>
                </div>
                <a class="animate-bounce font-futur text-2xl float-bottom mb-20 cursor-pointer bottom-20" onClick={scrollToAbout}>
                    <CaretDoubleDown size={32} weight="bold" class="text-emerald-400" />
                </a>
            </FixedImage>
            <div class="flex flex-col box-border" id="about">
                <div class="px-2 pb-2 md:px-32 flex flex-col lg:flex-row justify-center items-center pt-4">
                    <div class="flex flex-col lg:w-1/2">
                        <H3 additional_classes="">{t("aboutPage.about")}</H3>
                        <P>{t("aboutPage.description1")}</P>
                        <P>{t("aboutPage.description2")}</P>
                        <P>{t("aboutPage.description3")}</P>
                    </div>
                    <ImageDisplay src="/others/fun.jpg" extra_classes="lg:pt-4 lg:pb-4 lg:w-1/2 lg:max-w-[550px] lg:ml-5 justify-center items-center"/>
                </div>
                <div class="px-2 md:px-32 flex flex-col lg:flex-row justify-center items-center pt-4 pb-2 lg:bg-orange-100 shadow-[inset_0_1px_8px_0_rgba(0,0,0,0.7)]">
                    <div class="flex flex-col lg:w-1/2">
                        <H3 additional_classes="">{t("aboutPage.thematic.title")}</H3>
                        <P>{t("aboutPage.thematic.description")}</P>
                        <P>{t("aboutPage.thematic.description2")}</P>
                        <P>{t("aboutPage.thematic.description3")}</P>
                    </div>
                    <ImageDisplay src="/others/fun2.jpg" extra_classes="lg:pt-4 lg:pb-4 lg:w-1/2 lg:max-w-[550px] lg:ml-5 justify-center items-center"/>
                </div>
                <div class="pb-4 pt-4">
                    {/*  shadow-amber-500 */}
                    <div class="px-2 lg:px-32 mx-auto flex flex-col lg:w-fit text-center pt-4 shadow-md">
                        <H3 additional_classes="">{t("aboutPage.delegations.title")}</H3>
                        <P3 additional_classes="">{t("aboutPage.delegations.description")}</P3>
                    </div>
                </div>


                <div class="flex flex-wrap flex-row gap-4 bg-light-primary p-4 w-5/6 mx-auto">
                    {
                        universities.map(({uni, url}) => {
                            let src = "/uni/" + uni + "Logo.webp";
                            return (
                                <ExternalLink to={url}>
                                    <img
                                        class="h-20"
                                        src={src}
                                        alt={uni}
                                    />
                                </ExternalLink>
                            );
                        })
                    }
                </div>
                <div class="flex flex-wrap flex-row gap-4 bg-light-primary p-4 w-5/6 mx-auto">
                    {
                        asso.map(({asso, url}) => {
                            let src = "/asso/" + asso + "Logo.webp";
                            return (
                                <ExternalLink to={url}>
                                    <img
                                        class="h-28"
                                        src={src}
                                        alt={asso}
                                    />
                                </ExternalLink>
                            );
                        })
                    }
                </div>
            </div>
            {/* TODO : <img src="/banners/infographie.svg" width="100%" /> */} 
            <H3 additional_classes=" mx-auto mt-4">{t("homePage.countdown")}</H3>
            <Countdown />
        </div>
    )
};

export default Home;
