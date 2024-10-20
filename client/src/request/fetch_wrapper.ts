export async function fetch_get(url: string) {
    const token = localStorage.getItem("token")
    if (!token) {
        return undefined
    }
    const request = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        },
    })
    return await request.json()
}

export async function fetch_post(url: string, body: any) {
    const token = localStorage.getItem("token")
    if (!token) {
        return undefined
    }
    const request = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
    })
    return await request.json()
}

export async function fetch_post_no_token(url: string, body: any) {
    const request = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
    return await request.json()
}

export async function fetch_delete(url: string) {
    const token = localStorage.getItem("token")
    if (!token) {
        return undefined
    }
    const request = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
        },
    })
    return await request.json()
}

export async function fetch_put(url: string, body: any) {
    const token = localStorage.getItem("token")
    if (!token) {
        return undefined
    }
    const request = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
    })
    return await request.json()
}

export async function fetch_patch(url: string, body: any) {
    const token = localStorage.getItem("token")
    if (!token) {
        return undefined
    }
    const request = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "PATCH",
        headers: {
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
    })
    return await request.json()
}
