import { JSX } from "solid-js/jsx-runtime";

interface Props {
    url: string;
    children?: JSX.Element;
}

export default function (props: Props) {
    return (
        <div class="bg-fixed flex flex-col gap-2 w-full h-[30rem] object-cover object-top justify-center items-center bg-cover" style={"background-image: url('" + props.url + "')"}>
            <div class="w-full h-[30rem] flex flex-col gap-2 items-center justify-center">
                {props.children}
            </div>
        </div>
    );
}
