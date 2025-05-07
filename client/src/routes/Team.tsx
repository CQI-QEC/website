import Cards from "../components/Card"
import FixedImage from "../components/FixedImage"
import { t } from "../stores/locale"

const Team = () => {
    let team = [
        {
            name: "Laure Jalbert-Drouin",
            role: "Présidente",
            image: "/team/co/laure.jpg",
        },
        {
            name: "Cassie-Anais Savoie",
            role: "VP-Logistique",
            image: "/team/co/cassie.jpg",
        },
        {
            name: "Thomas Prévost",
            role: "VP-Commandites",
            image: "/team/co/thomas.jpg",
        },
        {
            name: "Gaya Mehenni",
            role: "VP-Compétitions",
            image: "/team/co/gaya.jpg",
        },
        {
            name: "Philippine Grimont",
            role: "Trésorerie",
            image: "/team/co/philippine.jpg",
        },
        {
            name: "Sandrinne Bourque",
            role: "VP-Communications",
            image: "/team/co/sandrinne.jpg",
        },
        {
            name: "Marc-Antoine Manningham",
            role: "VP-Technique",
            image: "/team/co/marcantoine.jpg",
        },
        {
            name: "Marie Rheault-Leclair",
            role: "VP-Conscience Sociale",
            image: "/team/co/marie.jpg",
        },
    ]

    const director = [
        {
            name: "Alexis Foulon",
            role: "Directeur Programmation",
            image: "Alexis Foulon - Directeur Programmation.JPG",
        },
        {
            name: "Catherine Tessier",
            role: "Directrice Évenementielle",
            image: "Catherine Tessier - Directrice Évenementiel.JPG",
        },
        {
            name: "Danick Thibault",
            role: "Directeur Senior",
            image: "Danick Thibault - Directeur Senior.JPG",
        },
        {
            name: "Floranne Lague",
            role: "Directrice Communication scientifique",
            image: "Floranne Lague - Directrice Communication scientifique.JPG",
        },
        {
            name: "Julien Bourque",
            role: "Directeur Programmation",
            image: "Julien Bourque - Directeur Programmation.JPG",
        },
        {
            name: "Justine Major",
            role: "Directrice Débats oratoires",
            image: "Justine Major - Directrice Débats oratoires.JPG",
        },
        {
            name: "Kayla Charky",
            role: "Directrice Génie conseil",
            image: "Kayla Charky - Directrice Génie conseil .JPG",
        },
        {
            name: "Laurence Lefrançois",
            role: "Directrice Bénévoles",
            image: "Laurence Lefrançois - Directrice Bénévoles.JPG",
        },
        {
            name: "Leandro Pereira",
            role: "Directeur junior",
            image: "Leandro Pereira - Directeur junior.JPG",
        },
        {
            name: "Madeleine Lepage",
            role: "Directrice Génie conseil",
            image: "Madeleine Lepage - Directrice Génie conseil .jpg",
        },
        {
            name: "Marc-André Baril",
            role: "Directeur Senior",
            image: "Marc-André Baril - Directeur Senior.JPG",
        },
        {
            name: "Marie Rouillard",
            role: "Directrice Partenariats",
            image: "Marie Rouillard - Directrice Partenariats.JPG",
        },
        {
            name: "Mikael Perrot",
            role: "Directeur Cycles supérieurs",
            image: "Mikael Perrot - Directeur Cycles supérieurs .JPG",
        },
        {
            name: "Nicolas Ouellette",
            role: "Directeur Réingénierie",
            image: "Nicolas Ouellette - Directeur Réingénierie.JPG",
        },
        {
            name: "Samuel Roch",
            role: "Directeur Junior",
            image: "Samuel Roch - Directeur Junior.JPG",
        },
        {
            name: "Simon Fortier",
            role: "Directeur Réingénierie",
            image: "Simon Fortier - Directeur Réingénierie.JPG",
        },
        {
            name: "Thomas Scarlett",
            role: "Directeur Conception innovatrice",
            image: "Thomas Scarlett - Directeur Conception innovatrice.JPG",
        },
        {
            name: "Élise Cloutier",
            role: "Directrice Conception innovatrice",
            image: "Élise Cloutier - Directrice Conception innovatrice .JPG",
        },
        {
            name: "Éloise Brosseau",
            role: "Directrice Programmation",
            image: "Éloise Brosseau - Directrice Programmation.JPG",
        },
        {
            name: "Sarah Roberge",
            role: "Directrice À La Chefferie",
            image: "Sarah Roberge - Directrice Chefs.JPG",
        },
    ]

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/team.svg" height="40rem">
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
