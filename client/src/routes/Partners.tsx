import FixedImage from "../components/FixedImage";
import { H1 } from "../components/Text";
import { t } from "../stores/locale";

const Partners = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/partner.svg" height="28rem">
                <h1 class="font-futur text-white text-center text-6xl">{t("partners")}</h1>
            </FixedImage>

            <div class="flex flex-col items-center gap-4">
                <div class="-mt-4 h-full w-full flex flex-row items-center justify-center p-4 gap-4 font-futur text-xl font-bold">
                    <a href="/doc/Plan de partenariat 2025 FR.pdf" target="_blank" class="bg-green-400 p-4 rounded-xl">Plan de partenariat FR</a>
                    <a href="/doc/Plan de partenariat 2025 EN.pdf" target="_blank" class="bg-green-400 p-4 rounded-xl">Sponsorship Plan EN</a>
                </div>
                <H1>Partenaires de la CQI 2025</H1>
                <div class="flex w-full flex-row flex-wrap gap-4 content-start">
                    <img src="/partners/genium360.png" class="h-24"/>
                    <img src="/partners/cascades.png" class="h-20"/>
                    <img src="/partners/oiq.png" class="h-24"/>
                    <img src="/partners/soucy.svg" class="h-32"/>
                    <img src="/partners/alten.png" class="h-20"/>
                </div>
            </div>
        </div>
    )
};

export default Partners;
