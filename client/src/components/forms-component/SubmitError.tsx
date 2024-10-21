import { Expandable } from "./Expandable"

type Props = {
    error: () => string | null
}

export function SubmitError(props: Props) {
    return (
        <Expandable expanded={!!props.error()}>
            <div class="pt-4 text-sm text-red-500 dark:text-red-400 md:text-base lg:pt-5 lg:text-lg">
                {props.error()}
            </div>
        </Expandable>
    )
}
