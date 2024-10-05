import FixedImage from '../components/FixedImage';
import PrefetchLink from '../components/PrefetchLink';


export default function ListParticipant() {

    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="font-futur text-white text-center text-6xl">{"Tableau de bord des chefs"}</h1>
            </FixedImage>
            <div class="-mt-32 h-full w-full flex flex-row items-center justify-center p-4 gap-4 font-futur text-xl font-bold">
            <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="text-center p-4 border-b border-gray-300">Prénom</th>
            <th class="text-center p-4 border-b border-gray-300">Nom</th>
            <th class="text-center p-4 border-b border-gray-300">Compétition</th>
            <th class="text-center p-4 border-b border-gray-300">Courriel</th>
            <th class="text-center p-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="p-4">John</td>
            <td class="p-4">Doe</td>
            <td class="p-4">Senior</td>
            <td class="p-4">john@example.com</td>
            <td class="p-4 flex flex-row gap-4">
                <PrefetchLink to="/participant/xyz" file="AdditionalForm" >
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Plus d'informations</button>
                </PrefetchLink>
                <PrefetchLink to="/participant/xyz" file="AdditionalForm" >
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Supprimer le participant</button>
                </PrefetchLink>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
            </div>
        </div>
    );
}
