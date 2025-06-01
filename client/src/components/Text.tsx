import { JSX } from "solid-js"

interface Props {
    children: JSX.Element;
    additional_classes?: string;
}

export function H1(props: Props) {
    return (
        <h1 class={"text-4xl font-extrabold tracking-tight font-futur transition" + (props.additional_classes? props.additional_classes : "")}>{props.children}</h1>
    );
}

export function H2(props: Props) {
    return (
        <h2 class={"text-3xl font-bold tracking-tight font-futur transition" + (props.additional_classes? props.additional_classes : "")}>{props.children}</h2>
    );
}

export function H3(props: Props) {
    return (
        <h3 class={"text-4xl font-semibold font-futur transition" + (props.additional_classes? props.additional_classes : "")}>{props.children}</h3>
    );
}

export function P(props: Props) {
    return (
        <p class={"mb-3 text-3xl text-justify w-full font-condensed transition" + (props.additional_classes? props.additional_classes : "")}>{props.children}</p>
    );
}

export function P2(props: Props) {
    return (
        <p class={"text-2xl text-gray-700 text-justify transition font-condensed" + (props.additional_classes? props.additional_classes : "")}>{props.children}</p>
    );
}
