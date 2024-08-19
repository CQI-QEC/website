import { ParentProps } from "solid-js";

export default function (props: ParentProps) {
    return (
        <div class="flex flex-col gap-2 w-full h-[42rem] object-cover object-top justify-center items-center bg-cover" style="background-image: url('/competition/home.webp')">
            {props.children}
        </div>
    );
}
