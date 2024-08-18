import { JSX } from "solid-js";

interface Props {
    to: string,
    underline?: boolean,
    children: JSX.Element,
}

export default function ExternalLink(props: Props) {
    return (
        <a
            class={
                "font-bold hover:text-light-highlight" +
                (props.underline
                    ? " border-b-2 border-b-light-highlight"
                    : "")
            }
            href={props.to}
            rel="noopener noreferrer"
            target="_blank"
        >
            {props.children}
        </a>
    )
}