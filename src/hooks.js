/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
  console.log(request)

  const acceptedLanguage =
    typeof request.headers["accept-language"] === "undefined"
      ? ""
      : request.headers["accept-language"].split(",")[0];

  return { acceptedLanguage };
}
