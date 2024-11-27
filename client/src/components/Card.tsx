import { JSX } from "solid-js"

interface Props {
    img?: string
    theme?: string
    children: JSX.Element
}

export default function Cards(props: Props) {
    return (
        <div
            class={
                "rounded-lg border border-zinc-200 bg-white shadow transition" +
                props.theme
            }
        >
            {props.img !== undefined && (
                <div
                    class="h-72 w-full rounded-t-lg bg-cover bg-bottom"
                    style={"background-image: url('" + props.img + "')"}
                ></div>
            )}
            <div class="p-5">{props.children}</div>
        </div>
    )
}
