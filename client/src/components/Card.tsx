import { JSX } from "solid-js"

interface Props {
    img?: string
    theme?: string
    height?: string
    children: JSX.Element
}

export default function Cards(props: Props) {
    let height
    if (!props.height) {
        height = 12
    } else {
        height = props.height
    }
    return (
        <div
            class={
                "rounded-lg border border-zinc-200 bg-white shadow transition" +
                props.theme
            }
        >
            {props.img !== undefined && (
                <div
                    class={"w-full rounded-t-lg bg-cover bg-top"}
                    style={
                        "background-image: url('" +
                        props.img +
                        "');height: " +
                        height +
                        "rem;"
                    }
                ></div>
            )}
            <div class="p-5">{props.children}</div>
        </div>
    )
}
