import { get } from "svelte/store";

export default function getLang(language) {
  console.log("geldi amk")
  let locale;

  if (get(language) === "tr") locale = "tr";
  else locale = "en";

  return locale;
}
