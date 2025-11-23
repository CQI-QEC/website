import Cards from "../components/Card"
import FixedImage from "../components/FixedImage"
import NavHeader from "../components/Header";
import { t, TranslationKey, useLocale } from "../stores/locale"
import { createEffect } from "solid-js";

interface Presidents {
    name: string;
    role: TranslationKey;
    image?: string;
    email?: string;
}

interface Director {
    name: string;
    role: TranslationKey;
    image?: string;
    competitions?: string[]; // TODO : Add flags to show different affiliations (duo senior, junior, etc.)
}

const Team = () => {
    // Get the current locale and make sure translations are loaded
    const locale = useLocale();

    createEffect(() => {
        // Forcing re-render when locale changes to ensure translations update (the hack to make the translations work needs this)
        console.log("Current locale:", locale);
    }, [locale]);
    
    let team : Presidents[] = [
        {
            name: "Marc-André Baril",
            role: "roles.president",
            image: "/team/co/baril.jpg",
            email: "mabaril@cqi-qec.qc.ca"
        },
        {
            name: "Britany Lévesque",
            role: "roles.vicePresidentLogisticsF",
            image: "/team/co/levesque.jpg",
            email: "blevesque@cqi-qec.qc.ca"
        },
        {
            name: "Alexandrine Ducharme",
            role: "roles.vicePresidentCompetitionsF",
            image: "/team/co/ducharme.jpg",
            email: "aducharme@cqi-qec.qc.ca"
        },
        {
            name: "Dahly Ann Smith",
            role: "roles.vicePresidentCommunicationsF",
            image: "/team/co/smith.jpg",
            email: "dasmith@cqi-qec.qc.ca"
        },
        {
            name: "Gabriel Lapointe",
            role: "roles.vicePresidentPartnerships",
            image: "/team/co/lapointe.jpg",
            email: "glapointe@cqi-qec.qc.ca"
        },
        {
            name: "Juliane Barrette",
            role: "roles.vicePresidentSocialConscienceF",
            image: "/team/co/barette.jpg",
            email: "jbarrette@cqi-qec.qc.ca"
        },
        {
            name: "Jacob Rioux",
            role: "roles.treasurer",
            email: "jrioux@cqi-qec.qc.ca",
            image: "/team/co/rioux.jpg"
        },
    ]

    const director: Director[] = [
        {
            name:"Émy Désaulniers",
            role: "roles.directorLogisticsF",
            image: "desaulniers.jpg",
        },
        {
            name:"Jérôme Lussier",
            role: "roles.directorVolunteers",
            image: "tyrone.jpg",
        },
        {
            name: "Isaac Soucy",
            role: "roles.directorVolunteers",
            // image: "soucy.jpg",
        },
        {
            name: "Rémi Drouin",
            role: "roles.directorTechnical",
            image: "drouin.jpg",
        },
        {
            name:"Sarah Roberge",
            role: "roles.directorChiefF",
            image: "roberge.jpg",
        },
        {
            name: "Cassie-Anais Savoie",
            role: "roles.directorEventsF",
            image: "cassie.jpg",
        },
        {
            name: "Sunnee Chevalier",
            role: "roles.directorWebsite",
            image: "chevalier.jpg",
        },
        {
            name: "Joanie Théroux",
            role: "roles.coordinatorJuniorSeniorF",
            image: "theroux.jpg",
        },
        {
            name: "Médéric Chalifour",
            role: "roles.directorSenior",
            image: "chalifour.jpg",
        },
        {
            name: "Pierre-Olivier Leroueil",
            role: "roles.directorSenior",
            image: "leroueil.jpg",
        },
        {
            name: "Alexandre Boucher",
            role: "roles.directorJunior",
            image: "boucher.jpg",
        },
        {
            name: "Zachary Désaulniers",
            role: "roles.directorJunior",
            image: "deso.jpg",
        },
        {
            name: "Dylan Renaud",
            role: "roles.directorReengineering",
            image: "renaud.jpg",
        },
        {
            name: "Antoine Gamache",
            role: "roles.directorReengineering",
            image: "gamache.jpg",
        },
        {
            name: "Nicolas Payeur",
            role: "roles.directorPuzzleHero",
            image: "payeur.jpg",
        },
        {
            name: "Émile Reny-Déry",
            role: "roles.directorPuzzleHero",
            image: "reny-dery.jpg",
        },
        {
            name: "Antony Martel",
            role: "roles.directorPuzzleHero",
            image: "martel.jpg",
        },
        {
            name: "Justin Héroux",
            role: "roles.directorInnovativeDesign",
            image: "heroux.jpg",
        },
        {
            name: "Jean-Christophe Anctil",
            role: "roles.directorInnovativeDesign",
            image: "anctil.jpg",
        },
        {
            name: "Philippine Grimont",
            role: "roles.directorConsultingEngineeringF",
            image: "grimont.jpg",
        },
        {
            name: "Laure Jalbert-Drouin",
            role: "roles.directorConsultingEngineeringF",
            image: "laure.jpg",
        },
        {
            name: "Nathaniel Girard",
            role: "roles.directorProgramming",
            image: "nate.jpg",
        },
        {
            name: "Marc-Anthony Girard",
            role: "roles.directorProgramming",
            image: "girard.jpg",
        },
        {
            name: "Samuel Côté",
            role: "roles.directorProgramming",
            image: "cote.jpg",
        },
        {
            name: "Samuel Grenier",
            role: "roles.directorProgramming",
            image: "grenier.jpg",
        },
        {
            name: "William Sylvain",
            role: "roles.directorGraduateStudies",
            image: "sylvain.jpg",
        },
        {
            name: "Justine Major",
            role: "roles.directorScientificCommunicationF",
            image: "major.jpg",
        },
        {
            name: "Ghita Lemrini",
            role: "roles.directorDebateF",
            image: "lemrini.jpg",
        },
    ]

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <NavHeader background={true}/>
            <FixedImage url="/banners/team.jpg" height="40rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {t("team")}
                </h1>
            </FixedImage>
            <div class="-mt-20 font-futur text-xl font-bold">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-12 sm:px-48 mx-auto pb-4">
                    {team.map((member) => {
                        return (
                            <Cards small={true} img={member.image ? member.image : "logo.png"}>
                                
                                <h2>{member.name}</h2>
                                <p>{t(member.role)}</p>
                                {/* The cast above isnt pretty but it works */}
                                {member.email ? <a href={"mailto:" + member.email} class="text-emerald-500 hover:underline">{member.email}</a> : null}
                            </Cards>
                        )
                    })}
                </div>
                <div class="w-1/2 h-1 bg-black mx-auto my-4"></div>
                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 px-12">
                    {director.map((member) => {
                        return (
                            <Cards img={member.image ? ("/team/directeur/" + member.image) : "logo.png"}>
                                <h2>{member.name}</h2>
                                <p>{t(member.role)}</p>
                                {/* The cast above isnt pretty but it works */}
                            </Cards>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team
