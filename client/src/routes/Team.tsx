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

    const director = [
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
            name: "Rémi Drouin",
            role: "Directeur Expérience Participant",
            image: "drouin.jpg",
        },
        {
            name: "Alexandre Boucher",
            role: "Directeur Junior",
            image: "boucher.jpg",
        },
        {
            name: "Joanie Théroux",
            role: "Directrice Junior",
            image: "theroux.jpg",
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
            name: "Médéric Chalifour",
            role: "Directeur Sénior",
            image: "chalifour.jpg",
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
                            <Cards small={true} img={member.image}>
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
