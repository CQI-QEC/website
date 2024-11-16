import { JSX, splitProps } from "solid-js"
import { InputError } from "./InputError"
import clsx from "clsx"
import { t } from "../../stores/locale"

type YesNoProps = {
    ref: (element: HTMLInputElement) => void
    name: string
    value?: "yes" | "no"
    onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
    onChange: JSX.EventHandler<HTMLInputElement, Event>
    onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
    required?: boolean
    class?: string
    label: string
    error?: string
    padding?: "none"
}

/**
 * Radio button group that provides Yes/No options. The label above the
 * radio buttons describes what the user is choosing between.
 */
export function YesNo(props: YesNoProps) {
    const [, inputProps] = splitProps(props, [
        "class",
        "value",
        "label",
        "error",
        "padding",
    ])

    return (
        <div class={clsx(props.class)}>
            <fieldset>
                <legend class="mb-2 font-medium md:text-lg lg:text-xl">
                    {props.label}
                    {props.required && (
                        <span class="ml-1 text-red-600 dark:text-red-400">
                            *
                        </span>
                    )}
                </legend>
                <div class="flex space-x-6">
                    <label class="flex select-none items-center space-x-2">
                        <input
                            {...inputProps}
                            class="h-4 w-4 cursor-pointer lg:h-5 lg:w-5"
                            type="radio"
                            id={`${props.name}-yes`}
                            value="yes"
                            checked={props.value === "yes"}
                            aria-invalid={!!props.error}
                            aria-errormessage={`${props.name}-error`}
                        />
                        <span class="font-medium md:text-lg lg:text-xl">
                            {t("additionalInfo.yes")}
                        </span>
                    </label>
                    <label class="flex select-none items-center space-x-2">
                        <input
                            {...inputProps}
                            class="h-4 w-4 cursor-pointer lg:h-5 lg:w-5"
                            type="radio"
                            id={`${props.name}-no`}
                            value="no"
                            checked={props.value === "no"}
                            aria-invalid={!!props.error}
                            aria-errormessage={`${props.name}-error`}
                        />
                        <span class="font-medium md:text-lg lg:text-xl">
                            {t("additionalInfo.no")}
                        </span>
                    </label>
                </div>
            </fieldset>
            <InputError name={props.name} error={props.error} />
        </div>
    )
}
