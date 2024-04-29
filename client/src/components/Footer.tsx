import { JSX } from "solid-js"

export const Footer = (): JSX.Element => {
    return (
        <footer class="flex w-full flex-col items-center gap-1 p-2">
            <span>
            </span>
            <span>&copy; {new Date().getFullYear()} Fait par Marc-Antoine Manningham</span>
        </footer>
    )
}
