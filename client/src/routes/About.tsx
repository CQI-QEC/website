import ExternalLink from "../components/ExternalLink";
import FixedImage from "../components/FixedImage";
import { H3, P } from "../components/Text";
import { t } from "../stores/locale";

const About = () => {
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
    return (
        <div class="flex w-full flex-col items-start justify-center gap-2">
            <FixedImage url="/competition/home.webp">
                <h1 class="font-futur text-white text-center text-6xl">{t("aboutPage.about")}</h1>
            </FixedImage>
            <div class="flex flex-col p-4 m-4 box-border">
                <P>{t("aboutPage.description")}</P>
                <H3>{t("aboutPage.thematic.title")}</H3>
                <P>{t("aboutPage.thematic.description")}</P>
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
        </div>
    );
};

export default About;
