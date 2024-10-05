import FixedImage from "../components/FixedImage";
import PrefetchLink from "../components/PrefetchLink";

interface Props {
    text: string;
}

function BigButton(props: Props) {
    return (
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-3 px-6 rounded">
            {props.text}
        </button>
    );
}

export default function LeaderView() {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="font-futur text-white text-center text-6xl">{"Tableau de bord des chefs"}</h1>
            </FixedImage>
            <div class="-mt-32 h-full w-full flex flex-row items-center justify-center p-4 gap-4 font-futur text-xl font-bold">
                <PrefetchLink to="/additional-form" file="AdditionalForm" >
                    <BigButton text="Changer mes renseignements personnels" />
                </PrefetchLink>
                <PrefetchLink to="/add-participant" file="AddParticipant" >
                    <BigButton text="Ajouter un participant" />
                </PrefetchLink>
            </div>
        </div>
    );
}
