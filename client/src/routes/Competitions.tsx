import Card from "../components/Card";
import FixedImage from "../components/FixedImage";
import NavHeader from "../components/Header";
import { H3, P2 } from "../components/Text";
import { t } from "../stores/locale";

interface Competition {
    name: string;
    driveLink?: string;
}

const Competition = () => {
    const competitions: Competition[] = [
        { name: "senior"},
        { name: "junior" },
        { name: "debate" },
        { name: "reengineering" },
        { name: "consulting" },
        { name: "scientific" },
        { name: "programming" },
        { name: "design" },
        { name: "superiorcycle" },
    ];
    return (
        <div style={{"color": "rgb(var(--primary-color))"}}>
            <NavHeader background={true}/>
            <FixedImage url="/banners/competitions.jpg" height="36rem" extra_classes="justify-center items-center">
                <h1 class="font-futur text-white text-center text-6xl">{t("competitionsPage.competitions")}</h1>
            </FixedImage>
            <div class="flex w-full h-2" style={{"background-color": "rgb(var(--secondary-color))"}}></div>
            <div class="flex w-full flex-col items-center justify-center px-8 pt-8 md:px-24 md:pt-18 w-1/3 text-center">
                <p class="text-3xl lg:text-justify w-fit px-2 font-condensed transition mr-auto">{t("competitionsPage.description")}</p>
                <div class="grid grid-flow-row grid-cols-1 w-full">
                    {
                        competitions.map((competition,i) => {
                            return (
                            <>
                                {/* 1 Competition plus its sidebar */}
                                <div class="w-full flex">
                                    {i%2===0 ? <div class="min-h-fit ml-auto md:w-6 bg-repeat-y"></div> : null}
                                    <Card theme="w-full md:w-3/5 md:my-4 md:mx-4" img={"/competition/" + competition.name + ".jpg"}>
                                        <H3>{t(("competitionsPage." + competition.name + ".title") as any)}</H3>
                                        <P2>{t(("competitionsPage." + competition.name + ".description") as any)}</P2>
                                    </Card>
                                </div>
                            </>);
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Competition;
