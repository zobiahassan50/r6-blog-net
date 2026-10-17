/**
 * Host + path redirects for Cloudflare Pages.
 * `_redirects` cannot use absolute hosts, and Pages skips `_redirects` when
 * Functions handle the request — keep both behaviors here.
 */
import { resolvePathRedirect } from '../scripts/redirects.mjs';
import { resolveCheckoutPathRedirect } from '../src/config/checkout-redirects.mjs';

const APEX = 'r6cheat.net';
const WWW = `www.${APEX}`;

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // www → apex (301). Requires www to hit this Pages project (custom domain),
  // or a zone Bulk Redirect if www uses the dummy-IP DNS pattern.
  if (url.hostname === WWW) {
    url.hostname = APEX;
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  const pathname = url.pathname;
  const checkout = resolveCheckoutPathRedirect(pathname);
  if (checkout) {
    return Response.redirect(checkout, 302);
  }

  const pathRedirect = resolvePathRedirect(pathname);
  if (pathRedirect) {
    const dest = new URL(pathRedirect, `https://${APEX}`);
    dest.search = url.search;
    dest.hash = url.hash;
    return Response.redirect(dest.toString(), 301);
  }

  return context.next();
}
