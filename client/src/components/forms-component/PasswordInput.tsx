import clsx from "clsx"
import { createMemo, createSignal, JSX, splitProps } from "solid-js"
import { InputError } from "./InputError"
import { InputLabel } from "./InputLabel"
import { Eye, EyeSlash } from "phosphor-solid-js"

type PasswordInputProps = {
    ref: (element: HTMLInputElement) => void
    name: string
    value: string | number | undefined
    onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
    onChange: JSX.EventHandler<HTMLInputElement, Event>
    onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
    required?: boolean
    class?: string
    label?: string
    error?: string
    padding?: "none"
}

/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export function PasswordInput(props: PasswordInputProps) {
    // Split input element props
    const [, inputProps] = splitProps(props, [
        "class",
        "value",
        "label",
        "error",
        "padding",
    ])

    // Create memoized value
    const getValue = createMemo<string | number | undefined>(
        (prevValue) =>
            props.value === undefined
                ? ""
                : !Number.isNaN(props.value)
                  ? props.value
                  : prevValue,
        "",
    )

    const [visibility, setVisibility] = createSignal(false)

    return (
        <div class={clsx("w-full", props.class)}>
            <InputLabel
                name={props.name}
                label={props.label}
                required={props.required}
            />
            <div class="relative">
                <input
                    {...inputProps}
                    class={clsx(
                        "h-12 w-full rounded-2xl border-2 bg-white px-5 outline-none placeholder:text-slate-500 dark:bg-gray-900 md:text-lg lg:px-6 lg:text-xl",
                        props.error
                            ? "border-red-600/50 dark:border-red-400/50"
                            : "border-slate-200 hover:border-slate-300 focus:border-sky-600/50 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-sky-400/50",
                    )}
                    type={clsx(visibility() ? "text" : "password")}
                    placeholder="********"
                    id={props.name}
                    value={getValue()}
                    aria-invalid={!!props.error}
                    aria-errormessage={`${props.name}-error`}
                />
                <button
                    type="button"
                    class="absolute right-5 top-1/2 -translate-y-1/2 transform"
                    onClick={() => setVisibility(!visibility())}
                >
                    {visibility() ? <Eye /> : <EyeSlash />}
                </button>
            </div>
            <InputError name={props.name} error={props.error} />
        </div>
    )
}
