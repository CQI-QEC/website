import { CaretDoubleDown } from "phosphor-solid-js"
import { JSX } from "solid-js"

interface CardProps {
    img: string
    children?: JSX.Element
    extra_classes?: string
    small?: boolean
    color?: string
    name?: string
    link?: string 
}

export default function PartnerCard(props: CardProps) {
    return (
        <div 
        class={"flex flex-row items-center rounded-lg p-2 border border-zinc-200 bg-white shadow transition " + (props.small ? `h-[6rem] xl:h-[6rem]` : `h-[8rem] xl:h-[8rem]`) + (props.extra_classes ? " " + props.extra_classes : "")}
        >
            {props.img !== undefined && (
                <img src={props.img} class={"object-contain h-full"}></img>
            )}
            {
                props.children !== undefined ? (<div class="p-5">{props.children}</div>) : null
            }
            <span class="tooltiptext">{props.name}</span>
            {
                props.link && (
                <a href={props.link} class="px-2">
                    <CaretDoubleDown size={32} weight="bold" class="text-emerald-400 -rotate-90" />
                </a>)
            }
            
        </div>
    )
}
