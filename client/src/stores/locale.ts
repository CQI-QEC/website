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

export const [locale, setLocale] = createSignal<Locale>(lang as Locale);

const dict = createMemo(() => i18n.flatten(dictionaries[locale()]));

export const t = i18n.translator(dict);