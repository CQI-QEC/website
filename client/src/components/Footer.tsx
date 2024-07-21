import { t } from "../stores/locale"

export default function Footer() {
    return (
        <footer class="flex w-full flex-col items-center gap-1 p-2">
            <span>
            </span>
            <span>{new Date().getFullYear()} {t("madeBy")} Marc-Antoine Manningham</span>
        </footer>
    );
}
