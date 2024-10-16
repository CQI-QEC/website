import FixedImage from "../components/FixedImage"
import PrefetchLink from "../components/PrefetchLink"

function ParticipantRow() {
    return (
        <tr class="border-b border-gray-200">
            <td class="p-4 text-center">John</td>
            <td class="p-4 text-center">Doe</td>
            <td class="p-4 text-center">Senior</td>
            <td class="p-4 text-center">john@example.com</td>
            <td class="flex flex-row gap-4 p-4 text-center">
                <PrefetchLink to="/participant/xyz" file="AdditionalForm">
                    <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Plus d'informations
                    </button>
                </PrefetchLink>
                <PrefetchLink to="/participant/xyz" file="AdditionalForm">
                    <button class="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
                        Supprimer le participant
                    </button>
                </PrefetchLink>
            </td>
        </tr>
    )
}

export default function ListParticipant() {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {"Tableau de bord des chefs"}
                </h1>
            </FixedImage>
            <div class="-mt-32 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                <div class="overflow-x-auto">
                    <table class="min-w-full border border-gray-300 bg-white">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border-b border-gray-300 p-4 text-center">
                                    Prénom
                                </th>
                                <th class="border-b border-gray-300 p-4 text-center">
                                    Nom
                                </th>
                                <th class="border-b border-gray-300 p-4 text-center">
                                    Compétition
                                </th>
                                <th class="border-b border-gray-300 p-4 text-center">
                                    Courriel
                                </th>
                                <th class="border-b border-gray-300 p-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ParticipantRow />
                            <tr class="border-b border-gray-200">
                                <td class="p-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"
                                    />
                                </td>
                                <td class="p-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"
                                    />
                                </td>
                                <td class="p-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"
                                    />
                                </td>
                                <td class="p-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-highlight sm:text-sm sm:leading-6"
                                    />
                                </td>
                                <td class="p-4">
                                    <PrefetchLink
                                        to="/participant/xyz"
                                        file="AdditionalForm"
                                    >
                                        <button class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                                            Ajouter un participant
                                        </button>
                                    </PrefetchLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
