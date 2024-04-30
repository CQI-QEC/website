import { JSX } from "solid-js"
import { t } from "../stores/locale"

export const Footer = (): JSX.Element => {
    return (
        <footer class="flex w-full flex-col items-center gap-1 p-2">
            <span>
            </span>
            <span>{new Date().getFullYear()} {t("madeBy")} Marc-Antoine Manningham</span>
        </footer>
    )
}
