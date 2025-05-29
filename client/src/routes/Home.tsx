import { CaretDoubleDown } from "phosphor-solid-js";
import Countdown from "../components/Countdown"
import FixedImage from "../components/FixedImage";
import { P, H3 } from "../components/Text";
import { t } from "../stores/locale";
import NavHeader from "../components/NewHeader";
import ExternalLink from "../components/ExternalLink";

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
    {uni: "uqac", url: "https://www.uqac.ca/"},
    {uni: "uqar", url: "https://www.uqar.ca/"},
    {uni: "uqat", url: "https://www.uqat.ca/"},
    {uni: "uqo", url: "https://uqo.ca/"},
    {uni: "uqtr", url: "https://www.uqtr.ca/"},
    {uni: "mcgill", url: "https://www.mcgill.ca/"},
    {uni: "concordia", url: "https://www.concordia.ca/"},
    {uni: "ets", url: "https://www.etsmtl.ca/"},
    {uni: "poly", url: "https://www.polymtl.ca/"},
    {uni: "ulaval", url: "https://www.ulaval.ca/"},
    {uni: "sherb", url: "https://www.usherbrooke.ca/"},
    {uni: "macdonald", url: "https://www.mcgill.ca/macdonald/"},
];

const Home = () => {

    return (
        <div class="flex w-full flex-col">
            <NavHeader background={true}/>
            <FixedImage url="/campus2.jpg" extra_classes="h-[100vh] justify-center items-center">
                <div class="flex flex-col items-center justify-center my-auto">
                    <p class="font-futur text-2xl text-emerald-400">{t("homePage.edition")}</p>
                    <h1 class="font-futur text-white text-center text-6xl" style="word-spacing: 100vw;">{t("homePage.cqi")}</h1>
                    <p class="font-futur text-emerald-400 text-2xl text-wrap">{t("homePage.location")}</p>
                    <p class="font-futur text-emerald-400 text-2xl text-wrap">{t("homePage.date")}</p>
                </div>
                <a class="animate-bounce font-futur text-2xl float-bottom mb-20 cursor-pointer absolute bottom-20" onClick={scrollToAbout}>
                    <CaretDoubleDown size={32} weight="bold" class="text-emerald-400" />
                </a>
            </FixedImage>
            <div class="flex flex-col px-2 md:px-32 pt-8 box-border gap-4" id="about">
                <H3>{t("aboutPage.about")}</H3>
                <P>{t("aboutPage.description1")}</P>
                <P>{t("aboutPage.description2")}</P>
                <P>{t("aboutPage.description3")}</P>
                <H3>{t("aboutPage.thematic.title")}</H3>
                <P>{t("aboutPage.thematic.description")}</P>
                <P>{t("aboutPage.thematic.description2")}</P>
                <P>{t("aboutPage.thematic.description3")}</P>
                <H3>{t("aboutPage.delegations.title")}</H3>
                <P>{t("aboutPage.delegations.description")}</P>
                <div class="flex flex-wrap flex-row gap-4 bg-light-primary p-4">
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
                <div class="flex flex-wrap flex-row gap-4 bg-light-primary p-4">
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
            <Countdown />
        </div>
    )
};

export default Home;
