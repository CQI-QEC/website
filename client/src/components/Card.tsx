import { JSX } from "solid-js"

interface CardProps {
    img?: string
    theme?: string
    small?: boolean
    children: JSX.Element
}

export default function Cards(props: CardProps) {
    return (
        <div
            class={
                "rounded-lg border border-zinc-200 bg-white shadow transition" +
                props.theme
            }
        >
            {props.img !== undefined && (
                <div
                    class={`w-full rounded-t-lg bg-cover bg-top ` + (props.small ? `h-[12rem] xl:h-[20rem]` : `h-[12rem] xl:h-[20rem]`)}
                    style={
                        "background-image: url('" +
                        props.img +
                        "');"
                    }
                ></div>
            )}
            <div class="p-5">{props.children}</div>
        </div>
    )
}
