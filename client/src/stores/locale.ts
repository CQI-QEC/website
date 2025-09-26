import { createMemo, createSignal } from "solid-js";
import * as i18n from "@solid-primitives/i18n";
import * as en from "../i18n/en";
import * as fr from "../i18n/fr";

const dictionaries = {
  en: en.dict,
  fr: fr.dict,
};

let lang = localStorage.getItem("locale");

if (!lang) {
  lang = "fr";
  localStorage.setItem("locale", lang);
}

export type Locale = "en" | "fr";

export const [useLocale, setLocale] = createSignal<Locale>(lang as Locale);

const dict = createMemo(() => i18n.flatten(dictionaries[useLocale()]));
const keys = i18n.flatten(dictionaries[useLocale()]);
export type TranslationKey = keyof typeof keys;

export const t = i18n.translator(dict) as <T extends keyof typeof keys>(key: T) => string;
// https://stackoverflow.com/questions/65975098/i18next-bold-text-in-the-middle-of-a-translation