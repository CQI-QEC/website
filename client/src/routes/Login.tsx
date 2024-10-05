import FixedImage from "../components/FixedImage";
import LoginForm from "../components/LoginForm";
import { t } from "../stores/locale";


const Login = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <FixedImage url="/banners/documents.svg" height="32rem">
                <h1 class="font-futur text-white text-center text-6xl">{t("login")}</h1>
            </FixedImage>
            <div class="-mt-32 h-full w-full flex flex-col items-center justify-center p-4 gap-4 font-futur text-xl font-bold">
                <LoginForm/>
            </div>
        </div>
    )
};

export default Login;

