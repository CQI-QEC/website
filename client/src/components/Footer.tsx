import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-solid-js";
import { t } from "../stores/locale"

export default function Footer() {
    return (
        //
        <footer class="flex w-full flex-col items-center gap-1 p-2 bg-orange-100">
            <p>
                <a href="https://www.facebook.com/CompQuebIng" class="text-black hover:text-white transition-colors">
                    <FacebookLogo size={24} class="inline mx-2" />
                </a>
                |
                <a href="https://www.instagram.com/cqi.qec">
                    <InstagramLogo size={24} class="inline mx-2 hover:text-white transition-colors" />
                </a>
                |
                <a href="https://www.linkedin.com/company/cqiqec/">
                    <LinkedinLogo size={24} class="inline mx-2 hover:text-white transition-colors" />
                </a>
                |
                <a href="https://www.creiq.qc.ca/">
                    <span class="inline mx-2 hover:text-white transition-colors">CRÉIQ</span>
                </a>
                |
                <a href="https://jeuxdegenie.qc.ca/">
                    <span class="inline mx-2 hover:text-white transition-colors">Jeux de génie</span>
                </a>
            </p>
            <p>{new Date().getFullYear()} {t("madeBy")} Sunnee Chevalier </p>
        </footer>
    );
}
