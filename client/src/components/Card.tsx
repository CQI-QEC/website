import { JSX } from "solid-js"

interface Props {
    img?: string;
    theme?: string;
    children: JSX.Element;
}

export default function Cards(props: Props) {
    return (
        <div class={"bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700 transition" + " " + props.theme}>
            {(props.img != undefined) && <img class="rounded-t-lg w-full h-40 object-cover" src={props.img} alt=""/>}
            <div class="p-5">
                {props.children}
            </div>
        </div>
    );
}
