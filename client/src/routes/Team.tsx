import Cards from "../components/Card"
import FixedImage from "../components/FixedImage"
import NavHeader from "../components/NewHeader";
import { t } from "../stores/locale"

interface Presidents {
    name: string;
    role: string;
    image: string;
    email?: string;
}

interface Director {
    name: string;
    role: string;
    image: string;
    competitions?: string[]; // TODO : Add flags to show different affiliations (duo senior, junior, etc.)
}

// TODO: add all the emails
const Team = () => {
    let team : Presidents[] = [
        {
            name: "Marc-André Baril",
            role: "Président",
            image: "/team/co/baril.jpg",
            email: "mabaril@cqi-qec.qc.ca"
        },
        {
            name: "Britany Lévesque",
            role: "VP-Logistique",
            image: "/team/co/levesque.jpg",
            email: "blevesque@cqi-qec.qc.ca"
        },
        {
            name: "Alexandrine Ducharme",
            role: "VP-Compétitions",
            image: "/team/co/ducharme.jpg",
            email: "aducharme@cqi-qec.qc.ca"
        },
        {
            name: "Dahly Ann Smith",
            role: "VP-Communications",
            image: "/team/co/smith.jpg",
            email: "dasmith@cqi-qec.qc.ca"
        },
        {
            name: "Gabriel Lapointe",
            role: "VP-Partenariats",
            image: "/team/co/lapointe.jpg",
            email: "glapointe@cqi-qec.qc.ca"
        },
        {
            name: "Juliane Barrette",
            role: "VP-Conscience Sociale",
            image: "/team/co/barette.jpg",
            email: "jbarrette@cqi-qec.qc.ca"
        },
        {
            name: "Jacob Rioux",
            role: "Trésorerie",
            email: "jrioux@cqi-qec.qc.ca",
            image: ""
        },
    ]

    const director: Director[] = [
        {   
            name: "Ély Thomas",
            role: "Directeur Partenariats",
            image: "thomas.jpg",
        },
        {
            name:"Émy Désaulniers",
            role: "Directrice Logistique",
            image: "desaulniers.jpg",
        },
        {
            name:"Jérome Lussier",
            role: "Directeur Bénévoles",
            image: "tyrone.jpg",
        },
        {
            name: "Isaac Soucy",
            role: "Directeur Bénévoles",
            image: "soucy.jpg",
        },
        {
            name: "Rémi Drouin",
            role: "Directeur Technique",
            image: "drouin.jpg",
        },
        {
            name:"Sarah Roberge",
            role: "Directrice Chefferie",
            image: "roberge.jpg",
        },
        {
            name: "Sunnee Chevalier",
            role: "Directeur Site Web",
            image: "chevalier.jpg",
        },
        {
            name: "Joanie Théroux",
            role: "Coordinatrice Junior & Senior",
            image: "theroux.jpg",
        },
        {
            name: "Médéric Chalifour",
            role: "Directeur Sénior",
            image: "chalifour.jpg",
        },
        {
            name: "Pierre-Olivier Leroueil",
            role: "Directeur Sénior",
            image: "leroueil.jpg",
        },
        {
            name: "Alexandre Boucher",
            role: "Directeur Junior",
            image: "boucher.jpg",
        },
        {
            name: "Zachary Désaulniers",
            role: "Directeur Junior",
            image: "deso.jpg",
        },
        {
            name: "Dylan Renaud",
            role: "Directeur Réingénierie",
            image: "renaud.jpg",
        },
        {
            name: "Antoine Gamache",
            role: "Directeur Réingénierie",
            image: "gamache.jpg",
        },
        {
            name: "Nicolas Payeur",
            role: "Directeur Puzzle hero",
            image: "payeur.jpg",
        },
        {
            name: "Émile Reny-Déry",
            role: "Directeur Puzzle hero",
            image: "reny-dery.jpg",
        },
        {
            name: "Antony Martel",
            role: "Directeur Puzzle hero",
            image: "martel.jpg",
        },
        {
            name: "Justin Héroux",
            role: "Directeur Conception Innovatrice",
            image: "heroux.jpg",
        },
        {
            name: "Jean-Christophe Anctil",
            role: "Directeur Conception Innovatrice",
            image: "anctil.jpg",
        },
        {
            name: "Philippine Grimont",
            role: "Directrice Génie Conseil",
            image: "grimont.jpg",
        },
        {
            name: "Laure Jalbert-Drouin",
            role: "Directrice Génie Conseil",
            image: "laure.jpg",
        },
        {
            name: "Nathaniel Girard",
            role: "Directeur Programmation",
            image: "nate.jpg",
        },
        {
            name: "Marc-Anthony Girard",
            role: "Directeur Programmation",
            image: "girard.jpg",
        },
                {
            name: "Samuel Côté",
            role: "Directeur Programmation",
            image: "cote.jpg",
        },
        {
            name: "Samuel Grenier",
            role: "Directeur Programmation",
            image: "grenier.jpg",
        },
        {
            name: "William Sylvain",
            role: "Directeur Cycles Supérieurs",
            image: "sylvain.jpg",
        },
        {
            name: "Justine Major",
            role: "Directrice Communication Scientifique",
            image: "major.jpg",
        },
        {
            name: "Ghita Lemrini",
            role: "Directrice Débats Oratoires",
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
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-12 sm:px-48 mx-auto">
                    {team.map((member) => {
                        return (
                            <Cards small={true} img={member.image}> {/*TODO color={"red"}  */}
                                
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                                {member.email ? <a href={"mailto:" + member.email} class="text-emerald-500 hover:underline">{member.email}</a> : null}
                            </Cards>
                        )
                    })}
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 px-12">
                    {director.map((member) => {
                        return (
                            <Cards img={"/team/directeur/" + member.image}>
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                            </Cards>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team
