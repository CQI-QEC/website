import { createEffect, JSX } from "solid-js"

import { useNavigate } from "@solidjs/router"

interface ProtectedRouteProps {
    children: JSX.Element
}

export function ProtectedRoute(props: ProtectedRouteProps) {
    const navigate = useNavigate()

    createEffect(async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/login")
        }
        const request = await fetch("http://localhost:3000/api/test", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        const response = await request.json()

        console.log(response)

        if (response.error) {
            navigate("/login")
        }
    })

    return <>{props.children}</>
}
