import FixedImage from "../components/FixedImage";
import { t } from "../stores/locale";

const Partners = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/partner.svg" height="28rem">
                <h1 class="font-futur text-white text-center text-6xl">{t("partners")}</h1>
            </FixedImage>
            <div class="-mt-4 h-full w-full flex flex-row items-center justify-center p-4 gap-4 font-futur text-xl font-bold">
                <a href="/doc/Plan de partenariat 2025 FR.pdf" target="_blank" class="bg-green-400 p-4 rounded-xl">Plan de partenariat FR</a>
                <a href="/doc/Plan de partenariat 2025 EN.pdf" target="_blank" class="bg-green-400 p-4 rounded-xl">Sponsorship Plan EN</a>
            </div>
        </div>
    )
};

export default Partners;
