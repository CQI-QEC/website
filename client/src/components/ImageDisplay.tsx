interface Props {
    src: string;
    extra_classes?: string;
    bg_position?: string;
}

export default function (props: Props) {
    return (
        <img class={"object-contain " + (props.extra_classes ? props.extra_classes : "")} 
        src={props.src}/>
    );
}
