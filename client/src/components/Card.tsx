import { JSX } from "solid-js"

const Card = ({
    img,
    theme,
    children,
}: {
    img?: string,
    theme?: string,
    children: JSX.Element,
}): JSX.Element => {
    return (
        <div class={"bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition" + " " + theme}>
            {(img != undefined) && <img class="rounded-t-lg w-full h-40 object-cover" src={img} alt=""/>}
            <div class="p-5">
                {children}
            </div>
        </div>
    );
}

export default Card;
