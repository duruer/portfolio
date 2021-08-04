import {
  addMessages,
  init,
  getLocaleFromNavigator,
  locale,
} from "svelte-i18n";

import { get } from "svelte/store";

import tr from "../lang/tr.json";
import en from "../lang/en.json";

addMessages("tr", tr);
addMessages("en", en);

init({
  fallbackLocale: "en",
  initialLocale:
    getLocaleFromNavigator().toUpperCase() === "tr".toUpperCase() ||
    getLocaleFromNavigator().toUpperCase() === "tr-tr".toUpperCase()
      ? "tr"
      : "en",
});

export function changeLanguage() {
  if (get(locale) === "tr") locale.set("en");
  else locale.set("tr");
}