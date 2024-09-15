import { JSX } from "solid-js/jsx-runtime";

interface Props {
    url: string;
    height: string;
    children?: JSX.Element;
}

export default function (props: Props) {
    return (
        <div class="flex flex-col gap-2 w-full object-cover object-top justify-center items-center bg-bottom bg-cover"  style={"background-image: url('" + props.url + "');" + "height: " + props.height + ";"}>
            <div class="w-full h-[30rem] flex flex-col gap-2 items-center mt-48">
                {props.children}
            </div>
        </div>
    );
}
