import Card from "../components/Card";
import FixedImage from "../components/FixedImage";
import NavHeader from "../components/NewHeader";
import { H3, P, P2 } from "../components/Text";
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
            <NavHeader />
            <FixedImage url="/banners/competitions.jpg" height="36rem" extra_classes="justify-center items-center">
                <h1 class="font-futur text-white text-center text-6xl">{t("competitionsPage.competitions")}</h1>
            </FixedImage>
            <div class="flex w-full h-4 bg-red-900"></div>
            <div class="flex w-full flex-col items-center justify-center p-8 md:p-24 w-1/3 text-center">
                <P>{t("competitionsPage.description")}</P>
                <div class="grid grid-flow-row grid-cols-1 w-full">
                    {
                        competitions.map((competition,i) => {
                            return (
                            <>
                                <div class="w-full flex">
                                    {i%2===0 ? <div class="min-h-fit ml-auto bg-emerald-600 md:w-4"></div> : null}
                                    <Card theme="w-full md:w-3/5 md:my-4 md:mx-4" img={"/competition/" + competition.name + ".jpg"}>
                                        <H3>{t(("competitionsPage." + competition.name + ".title") as any)}</H3>
                                        <P2>{t(("competitionsPage." + competition.name + ".description") as any)}</P2>
                                        
                                        {/* { competition.driveLink ? <a href={competition.driveLink}>Lien Drive!</a> : null }  */}
                                    </Card>
                                    {i%2===1 ? <div class="min-h-fit mr-auto bg-emerald-600 md:w-4"></div> : null}
                                    </div>
                                    {
                                        i!==competitions.length-1 ?
                                        <div class="flex w-full h-4">
                                            {i%2===0 ?<span class="md:h-4 md:w-12 bg-emerald-600 ml-auto rounded-bl-lg"></span>:<span class="h-4 md:w-12 bg-emerald-600 ml-auto rounded-tl-lg"></span>}
                                            <span class="md:w-1/5 bg-emerald-600 md:h-4"></span>
                                            {i%2===0 ?<span class="md:h-4 md:w-12 bg-emerald-600 mr-auto rounded-tr-lg"></span>:<span class="h-4 md:w-12 bg-emerald-600 mr-auto rounded-br-lg"></span>}
                                        </div>
                                        :null
                                    }
                                    <div>

                                </div>
                            </>    
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Competition;
