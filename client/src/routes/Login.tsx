import { createEffect } from "solid-js"
import FixedImage from "../components/FixedImage"
import { t } from "../stores/locale"
import { useNavigate } from "@solidjs/router"
import LoginForm from "../components/forms/LoginForm"

export default function Login() {
    const navigate = useNavigate()

    createEffect(async () => {
        const token = localStorage.getItem("token")
        if (!token) return
        navigate("/dashboard")
    })
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    {t("login")}
                </h1>
            </FixedImage>
            <div class="-mt-32 flex h-full w-full flex-col items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                <LoginForm />
            </div>
        </div>
    )
}
