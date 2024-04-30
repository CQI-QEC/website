// Inspired from https://github.com/cloworm/countdown/blob/master/components/CountdownCard.tsx

import { isDark } from "../stores/isDark";

interface Props {
    id: string,
    label: () => string,
    current: () => string,
}

const CountdownCard = ({ id, label, current }: Props) => {
    const backgroundColorUp = () => {
        return isDark() ? "hsl(236, 21%, 22%)": "hsl(236 , 21%, 69%)";
    };
    const backgroundColorDown = () => {
        return isDark() ? "hsl(236, 21%, 26%)": "hsl(236 , 21%, 80%)";
    };
    return (
        <div class="relative perspective">
        <div
            class="relative rounded-t-lg h-10 w-20 lg:h-20 lg:w-44"
        >
            <p class="absolute top-5 lg:top-8 left-0 right-0 text-center text-4xl lg:text-8xl font-bold">
            {current()}
            </p>
            <svg width="100%" height="100%">
            <mask id={`${id}-m`} fill="#fff">
                <rect id={`${id}-r`} width="100%" height="100%"/>
                <circle r="8" fill="#000" cx="0" cy="100%" />
                <circle r="8" fill="#000" cx="100%" cy="100%" />
            </mask>
            <use href={`#${id}-r`} fill={backgroundColorUp()} mask={`url(#${id}-m)`} />
            </svg>
        </div>

        <div
            class="relative rounded-b-lg h-10 w-20 lg:h-20 lg:w-44"
        >
            <p class="absolute bottom-5 lg:bottom-8 left-0 right-0 text-center text-4xl lg:text-8xl font-bold" data-testid={id}>
            {current()}
            </p>
            <svg width="100%" height="100%">
            <mask id={`${id}-m2`} fill="#fff">
                <rect id={`${id}-r2`} width="100%" height="100%"/>
                <circle r="8" fill="#000" cx="0" cy="0" />
                <circle r="8" fill="#000" cx="100%" cy="0" />
            </mask>
            <use href={`#${id}-r2`} fill={backgroundColorDown()} mask={`url(#${id}-m2)`} />
            </svg>
        </div>

        <p class="text-xs lg:text-base text-center lg:font-bold pt-3.5 lg:pt-7">
            {label()}
        </p>
        </div>
    );
};

export default CountdownCard;