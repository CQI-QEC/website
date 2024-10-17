import FixedImage from "../components/FixedImage"
import PrefetchLink from "../components/PrefetchLink"

interface Props {
    text: string
}

function BigButton(props: Props) {
    return (
        <button class="rounded bg-blue-500 px-6 py-3 text-2xl font-bold text-white hover:bg-blue-700">
            {props.text}
        </button>
    )
}

export default function LeaderView() {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {"Tableau de bord des chefs"}
                </h1>
            </FixedImage>
            <div class="-mt-32 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                <PrefetchLink to="/additional-form" file="AdditionalForm">
                    <BigButton text="Changer mes renseignements personnels" />
                </PrefetchLink>
                <PrefetchLink to="/list-participant" file="ListParticipant">
                    <BigButton text="Liste des participants" />
                </PrefetchLink>
            </div>
        </div>
    )
}
