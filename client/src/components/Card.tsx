import { JSX } from "solid-js"

interface Props {
    img?: string;
    theme?: string;
    children: JSX.Element;
}

export default function Cards(props: Props) {
    return (
        <div class={"bg-white border border-zinc-200 rounded-lg shadow transition" + props.theme}>
            {(props.img != undefined) && <div class="rounded-t-lg w-full h-72 bg-cover bg-bottom"  style={"background-image: url('" + props.img + "')"} ></div>}
            <div class="p-5">
                {props.children}
            </div>
        </div>
    );
}
