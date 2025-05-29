import NavHeader from "../components/NewHeader"
import PrefetchLink from "../components/PrefetchLink"

const NotFound = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center h-full">
            <NavHeader background={true}/>
            <div>
                <h2 class="text-3xl font-bold mt-[15vh]">Page Not Found</h2>
                <PrefetchLink to="/" file="Home">Return to Home</PrefetchLink>
            </div>

        </div>
    )
}

export default NotFound
