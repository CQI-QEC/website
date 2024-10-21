import { createEffect, JSX } from "solid-js"

import { useNavigate } from "@solidjs/router"
import { testAuth } from "../request/routes"

interface ProtectedRouteProps {
    children: JSX.Element
}

export function ProtectedRoute(props: ProtectedRouteProps) {
    const navigate = useNavigate()

    createEffect(async () => {
        const response = await testAuth()

        if (response.error) {
            localStorage.removeItem("token")
            navigate("/login")
        }
    })

    return <>{props.children}</>
}
