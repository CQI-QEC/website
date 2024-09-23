import Cards from "../components/Card";
import FixedImage from "../components/FixedImage";
import { t } from "../stores/locale";

const Team = () => {
    let team = [
        {
            name: "Laure Jalbert-Drouin",
            role: "Présidente",
            image: "/team/laure.png",
        },
        {
            name: "Cassie-Anais Savoie",
            role: "VP-Logistique",
            image: "/team/cassie.png",
        },
        {
            name: "Thomas Prévost",
            role: "VP-Commandites",
            image: "/team/thomas.png",
        },
        {
            name: "Gaya Mehenni",
            role: "VP-Compétitions",
            image: "/team/gaya.png",
        },
        {
            name: "Philippine Grimont",
            role: "Trésorerie",
            image: "/team/philippine.png",
        },
        {
            name: "Sandrinne Bourque",
            role: "VP-Communications",
            image: "/team/sandrinne.png",
        },
        {
            name: "Marc-Antoine Manningham",
            role: "VP-Technique",
            image: "/team/marcantoine.png",
        },
        {
            name: "Marie Rheault-Leclair",
            role: "VP-Conscience Sociale",
            image: "/team/marie.png",
        }
    ];

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/team.svg" height="40rem">
                <h1 class="font-futur text-white text-center text-6xl">{t("team")}</h1>
            </FixedImage>
            <div class="-mt-20 grid grid-cols-4 p-4 gap-4 font-futur text-xl font-bold">
                {
                    team.map((member) => {
                        return (
                            <Cards>
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                            </Cards>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Team;
