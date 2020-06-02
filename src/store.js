import { getLocaleFromNavigator } from "svelte-i18n";
import { writable } from "svelte/store";

export const lang = writable(getLocaleFromNavigator() === "tr" ? "tr" : "en");
