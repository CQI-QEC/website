import { JSX } from "solid-js"

interface CardProps {
    img?: string
    theme?: string
    small?: boolean
    children: JSX.Element
    extra_classes?: string
    color?: string
}

export default function Cards(props: CardProps) {
    return (
        <div
            class={
                "rounded-lg border border-zinc-200 bg-white shadow transition" +
                props.theme + (props.extra_classes ? " " + props.extra_classes : "")
            }
        >
            {props.img !== undefined && (
                <div
                    class={`w-full rounded-t-lg bg-cover bg-center ` + (props.small ? `h-[12rem] xl:h-[20rem]` : `h-[12rem] xl:h-[20rem]`)}
                    style={
                        "background-image: url('" +
                        props.img +
                        "');"
                    }
                >
                    {
                        props.color ? (
                            <div class={`mr-1 ml-auto bg-${props.color}-500 h-5 w-3 z-14 relative`}></div>
                        ) : null
                    }
                </div>
            )}
            <div class="p-5">{props.children}</div>
        </div>
    )
}
