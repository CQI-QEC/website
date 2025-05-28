import { ParentProps } from "solid-js"
import Footer from "./components/Footer"

export const App = (props: ParentProps) => {
    return (
        <div class="flex min-h-full w-full flex-col bg-white text-light-secondary transition">
            

            <main class="flex h-full w-full grow flex-col items-center">
                {props.children}
            </main>

            <Footer />
        </div>
    )
}
