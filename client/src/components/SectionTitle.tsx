interface Props {
    title: string
}

export default function SectionTitle(props: Props) {
    return (
        <div class="w-full">
            <div class="border-2 rounded-xl w-fit">
                <h1 class="text-4xl font-extrabold tracking-tight m-0.5 mx-8">{props.title}</h1>
            </div>
        </div>
    );
}