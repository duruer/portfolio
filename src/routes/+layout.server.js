/** @type {import('./$types').LayoutLoad} */
export function load({ request: { headers } }) {
  const acceptedLanguage =
    typeof headers["accept-language"] === "undefined"
      ? ""
      : headers["accept-language"].split(",")[0];

  return { acceptedLanguage };
}
