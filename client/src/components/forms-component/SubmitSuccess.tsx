import { Expandable } from "./Expandable"

type Props = {
    success: () => string | null
}

export function SubmitSuccess(props: Props) {
    return (
        <Expandable expanded={!!props.success()}>
            <div class="pt-4 text-sm text-green-500 dark:text-green-400 md:text-base lg:pt-5 lg:text-lg">
                {props.success()}
            </div>
        </Expandable>
    )
}
