import { useNavigate, useParams } from "@solidjs/router"
import { createEffect } from "solid-js"
import { testAuth } from "../request/routes"
import FixedImage from "../components/FixedImage"
import { NewPassword } from "../components/NewPasswordForm"

export default function ChangePassword() {
    const params = useParams()
    const navigate = useNavigate()
    createEffect(async () => {
        if (params.token) {
            localStorage.setItem("token", params.token)
        }

        const response = await testAuth()

        if (response.error) {
            localStorage.removeItem("token")
            navigate("/login")
        }
    })
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="text-center font-futur text-6xl text-white">
                    Changement de mot de passe
                </h1>
            </FixedImage>
            <div class="-mt-32 flex h-full w-full flex-row items-center justify-center gap-4 p-4 font-futur text-xl font-bold">
                <NewPassword />
            </div>
        </div>
    )
}
