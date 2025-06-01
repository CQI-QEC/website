import FixedImage from "../components/FixedImage"
import NavHeader from "../components/NewHeader"
import { P } from "../components/Text"
import { t } from "../stores/locale"

const Documents = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <NavHeader background={true}/>
            <FixedImage url="/banners/documents.jpg" height="32rem" bg_position="bg-center">
                <h1 class="text-center font-futur text-6xl text-white">
                    Documents
                </h1>
            </FixedImage>
            <div class=" flex h-full w-full flex-col items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                <P>{t("documents.description")}</P>
                <div class="flex h-full w-full flex-row items-center flex-wrap justify-center gap-4 p-4 font-futur text-xl font-bold">
                    <a
                        href="/doc/Politique_BIPCV.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Politique BIPCV
                    </a>
                    <a
                        href="/doc/Politique_de_discipline_EN.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Politique de discipline EN
                    </a>
                    <a
                        href="/doc/Politique_de_discipline_FR.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Politique de discipline FR
                    </a>
                    <a
                        href="/doc/Reglement_CQI_FR.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Règlement CQI FR
                    </a>
                    <a
                        href="/doc/Rulebook_QEC_EN.pdf"
                        target="_blank"
                        class="rounded-xl bg-green-400 p-4"
                    >
                        Règlement CQI EN
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Documents
