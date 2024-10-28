import { CaretCircleLeft } from "phosphor-solid-js"
import PrefetchLink from "./PrefetchLink"
import { t } from "../stores/locale"

export default function Goback() {
    return (
        <PrefetchLink
            to="/dashboard"
            file="Dashboard"
            class="absolute left-8 top-0 flex flex-row items-center gap-2"
        >
            <CaretCircleLeft size="2rem" />
            <span>{t("dashboard.goback")}</span>
        </PrefetchLink>
    )
}
