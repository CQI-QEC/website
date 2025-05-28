import Card from "../components/Card";
import FixedImage from "../components/FixedImage";
import NavHeader from "../components/NewHeader";
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
        // TODO: Add PuzzleHero
    ];
    return (
        <div>
            <NavHeader background={true}/>
            <FixedImage url="/banners/competitions.jpg" height="36rem" extra_classes="justify-center items-center">
                <h1 class="font-futur text-white text-center text-6xl">{t("competitionsPage.competitions")}</h1>
            </FixedImage>
            <div class="flex w-full h-2 bg-red-900"></div>
            <div class="flex w-full flex-col items-center justify-center px-8 pt-8 md:px-24 md:pt-18 w-1/3 text-center">
                <p class="text-3xl text-justify w-fit px-2 font-condensed transition mr-auto">{t("competitionsPage.description")}</p>
                {/* TODO: Becomes 10 competitions with PuzzleHero being official */}
                <div class="grid grid-flow-row grid-cols-1 w-full">
                    {
                        competitions.map((competition,i) => {
                            return (
                            <>
                                {/* 1 Competition plus its sidebar */}
                                <div class="w-full flex">
                                    {i%2===0 ? <div class="min-h-fit ml-auto md:w-6 bg-slate-900 bg-repeat-y border-x-4 border-emerald-600" style={"background-image: url('/misc/up_road.svg');"}></div> : null}
                                    <Card theme="w-full md:w-3/5 md:my-4 md:mx-4" img={"/competition/" + competition.name + ".jpg"}>
                                        <H3>{t(("competitionsPage." + competition.name + ".title") as any)}</H3>
                                        <P2>{t(("competitionsPage." + competition.name + ".description") as any)}</P2>
                                        
                                        {/* { competition.driveLink ? <a href={competition.driveLink}>Lien Drive!</a> : null }  */}
                                    </Card>
                                    {i%2===1 ? <div class="min-h-fit mr-auto md:w-6 bg-slate-900 bg-repeat-y border-x-4 border-emerald-600" style={"background-image: url('/misc/up_road.svg');"}></div> : null}
                                </div>
                                {/* MiddleRoad */}
                                {
                                    i!==competitions.length-1 ?
                                    <div class="flex w-full h-6">
                                        {i%2===0 ?
                                            <span class="md:w-[calc(20%+7rem)] md:h-6 bg-slate-900 border-y-4 border-emerald-600 mx-auto rounded-tr-lg rounded-bl-lg" style={"background-image: url('/misc/road_bright.svg');"}></span>:
                                            <span class="md:w-[calc(20%+7rem)] md:h-6 bg-slate-900 border-y-4 border-emerald-600 mx-auto rounded-tl-lg rounded-br-lg" style={"background-image: url('/misc/road_bright.svg');"}></span>
                                        }
                                    </div>
                                    :null
                                }
                            </>);
                        })
                    }
                </div>
            </div>
            {/* Road at the end of the page */}
            <div class="flex w-full h-4 bg-emerald-600"></div>
            <div class="flex w-full h-8 bg-slate-900" style={"background-image: url('/misc/road_bright.svg');"}></div>
            <div class="flex w-full h-4 bg-emerald-600"></div>
        </div>
    )
};

export default Competition;
