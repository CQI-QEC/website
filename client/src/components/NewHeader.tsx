import { JSX, createSignal } from "solid-js"
import { locale, setLocale, t } from "../stores/locale"
import { A } from "@solidjs/router"
import PrefetchLink from "./PrefetchLink"
import closeMenuIcon from "../../assets/close.svg"
import menuIcon from "../../assets/menu.svg"

const links = () => {
    return [
        {
            to: "/about",
            file: "About",
            name: t("aboutPage.about"),
        },
        {
            to: "/competitions",
            file: "Competitions",
            name: t("competitionsPage.competitions"),
        },
        {
            to: "/team",
            file: "Team",
            name: t("team"),
        },
        {
            to: "/partners",
            file: "Partners",
            name: t("partners"),
        },
        {
            to: "/documents",
            file: "Documents",
            name: t("documents.documents"),
        },
    ]
}

const toggleLanguage = (): void => {
    if (locale() === "en") {
        localStorage.setItem("locale", "fr")
        setLocale("fr")
    } else {
        localStorage.setItem("locale", "en")
        setLocale("en")
    }
}

export default function NavHeader() {
    const [menuIsOpen, setMenuIsOpen] = createSignal(false)
    let hamburgerButton: HTMLButtonElement | undefined
    let hamburgerMenu: HTMLDivElement | undefined

    //#region Hamburger menu
    const toggleHamburgerMenu = (): void => {
        hamburgerButton?.classList.toggle("hidden")
        hamburgerMenu?.classList.toggle("hidden")

        setMenuIsOpen(!menuIsOpen)
    }

    const HamburgerMenu = (): JSX.Element => {
        return (
            <div ref={hamburgerMenu} class={menuIsOpen() ? "" : "hidden"}>
                <div class="absolute right-0 top-0 z-10 flex h-screen w-full flex-col justify-center bg-black bg-opacity-60 p-2 text-4xl font-bold">
                    <div class="flex items-center justify-between">
                        <button
                            onClick={toggleLanguage}
                            class="flex h-[48px] w-[48px] border-none bg-transparent"
                        >
                            {t("lang")}
                        </button>

                        <button
                            onClick={toggleHamburgerMenu}
                            class="flex self-end border-none bg-transparent"
                        >
                            <img
                                src={closeMenuIcon}
                                alt="close menu"
                                width="44px"
                                height="44px"
                            />
                        </button>
                    </div>

                    <ul class="flex grow flex-col justify-center gap-8">
                        {links().map((link) => {
                            return (
                                <li class="ml-4 flex h-fit w-fit">
                                    <PrefetchLink
                                        to={link.to}
                                        file={link.file}
                                        onClick={toggleHamburgerMenu}
                                        class="transition hover:border-b-2 hover:border-b-light-highlight hover:text-light-highlight"
                                    >
                                        {link.name}
                                    </PrefetchLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    //#endregion

    //#region Standard menu
    const StandardMenu = (): JSX.Element => {
        return (
            <ul class="hidden h-fit font-condensed text-2xl lg:flex">
                {links().map((link) => {
                    return (
                        <li class="ml-4 flex">
                            <PrefetchLink
                                to={link.to}
                                file={link.file}
                                class="transition hover:border-b-2 hover:border-b-light-highlight hover:text-light-highlight"
                            >
                                {link.name}
                            </PrefetchLink>
                        </li>
                    )
                })}

                <li class="ml-4 flex">
                    <button
                        onClick={toggleLanguage}
                        class="ml-4 flex border-none"
                    >
                        {t("lang")}
                    </button>
                </li>
            </ul>
        )
    }
    //#endregion

    return (
        <header class="top-0 h-[10vh] flex w-full items-center justify-between p-4 text-white absolute">
            <h1 class="font-condensed text-3xl font-bold md:pl-0 lg:pl-8">
                <A href="/">
                    <img src="/logo.jpg" class="h-24"></img>
                </A>
            </h1>

            <nav>
                <button
                    ref={hamburgerButton}
                    onClick={toggleHamburgerMenu}
                    class="lg:hidden"
                >
                    <img
                        src={menuIcon}
                        width="44px"
                        height="44px"
                        alt="open menu"
                    />
                </button>

                <HamburgerMenu />
                <StandardMenu />
            </nav>
        </header>
    )
}
