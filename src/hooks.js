export function getSession(request) {
  const acceptedLanguage = request.headers["accept-language"].split(',')[0];
  return { acceptedLanguage };
}