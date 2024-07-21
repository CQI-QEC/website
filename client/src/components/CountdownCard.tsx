// Inspired from https://github.com/cloworm/countdown/blob/master/components/CountdownCard.tsx

interface Props {
    id: string,
    label: () => string,
    current: () => string,
}

export default function CountdownCard(props: Props) {
    return (
        <div class="relative perspective">
            <div
                class="relative rounded-t-lg h-10 w-20 lg:h-20 lg:w-44"
            >
                <p class="absolute top-5 lg:top-8 left-0 right-0 text-center text-4xl lg:text-8xl font-bold">
                    {props.current()}
                </p>
                <svg width="100%" height="100%">
                    <mask id={`${props.id}-m`} fill="#fff">
                        <rect id={`${props.id}-r`} width="100%" height="100%" />
                        <circle r="8" fill="#000" cx="0" cy="100%" />
                        <circle r="8" fill="#000" cx="100%" cy="100%" />
                    </mask>
                    <use href={`#${props.id}-r`} fill={"hsl(236 , 21%, 69%)"} mask={`url(#${props.id}-m)`} />
                </svg>
            </div>

            <div
                class="relative rounded-b-lg h-10 w-20 lg:h-20 lg:w-44"
            >
                <p class="absolute bottom-5 lg:bottom-8 left-0 right-0 text-center text-4xl lg:text-8xl font-bold" data-testid={props.id}>
                    {props.current()}
                </p>
                <svg width="100%" height="100%">
                    <mask id={`${props.id}-m2`} fill="#fff">
                        <rect id={`${props.id}-r2`} width="100%" height="100%" />
                        <circle r="8" fill="#000" cx="0" cy="0" />
                        <circle r="8" fill="#000" cx="100%" cy="0" />
                    </mask>
                    <use href={`#${props.id}-r2`} fill={"hsl(236 , 21%, 80%)"} mask={`url(#${props.id}-m2)`} />
                </svg>
            </div>

            <p class="text-xs lg:text-base text-center lg:font-bold pt-3.5 lg:pt-7">
                {props.label()}
            </p>
        </div>
    );
}
