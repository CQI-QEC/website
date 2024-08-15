interface Props {
    title: string
}

export default function SectionTitle(props: Props) {
    return (
        <div class="w-full">
            <div class="w-fit flex justify-center w-64">
                <h1 class="font-futur text-4xl m-1">{props.title}</h1>
            </div>
        </div>
    );
}