/** www → apex 301 (Pages `_redirects` rejects absolute host sources). */
const APEX = 'r6cheat.net';
const WWW = `www.${APEX}`;

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === WWW) {
    url.hostname = APEX;
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
