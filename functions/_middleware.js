/**
 * Host + path redirects for Cloudflare Pages.
 * `_redirects` cannot use absolute hosts, and Pages skips `_redirects` when
 * Functions handle the request — keep both behaviors here.
 */
import { resolvePathRedirect } from '../scripts/redirects.mjs';
import { resolveCheckoutPathRedirect } from '../src/config/checkout-redirects.mjs';

const APEX = 'r6cheat.net';

export async function onRequest(context) {
  const url = new URL(context.request.url);

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
