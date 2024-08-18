import { JSX, onMount } from "solid-js"

import { A } from "@solidjs/router"
import { dataSaver } from "../stores/dataSaver"

interface Props {
    to: string
    file: string
    onClick?: () => void
    children: JSX.Element
}

export default function PrefetchLink(props: Props) {
    onMount(() => {
        // Only prefetch if the user is not using the Save-Data header.
        if (!dataSaver) {
            requestIdleCallback(() => {
                import(`../routes/${props.file}.tsx`)
            })
        }
    });

    return (
        <A
            href={props.to}
            onClick={props.onClick}
            class="border-b-2 border-b-light-highlight hover:text-light-highlight"
        >
            {props.children}
        </A>
    );
}