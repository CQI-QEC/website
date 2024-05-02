import Countdown from "../components/Countdown"
import { P } from "../components/Text";
import { t } from "../stores/locale";

const Home = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <P>{t("aboutPage.description")}</P>
            <Countdown/>
        </div>
    )
};

export default Home;
