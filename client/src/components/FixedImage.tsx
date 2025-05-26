import { JSX } from "solid-js/jsx-runtime";

interface Props {
    url: string;
    height?: string;
    children?: JSX.Element;
    extra_classes?: string;
}

export default function (props: Props) {
    return (
        <div class={"flex flex-col w-full object-cover object-top items-center m-0 bg-center bg-cover" + " " + (props.extra_classes ? props.extra_classes : "")}  style={"background-image: url('" + props.url + "');" + (props.height? "height: " + props.height + ";" : "")}>
            <div class="w-full h-full flex flex-col gap-2 items-center justify-center">
                {props.children}
            </div>
        </div>
    );
}
