/**
 * Host + scheme + path redirects for Cloudflare Pages.
 *
 * Canonical hostname: https://r6cheat.net  (apex, no www, HTTPS only)
 *
 * Enforced here because:
 *   • `_redirects` cannot use absolute hosts (Cloudflare Pages rejects them).
 *   • Pages Functions skip `_redirects` when a function handles the request,
 *     so both host-redirect and path-redirect logic must live in one place.
 *   • "Always Use HTTPS" and Bulk Redirects are dashboard settings that may
 *     not survive zone transfers or new deployments — code is the reliable source
 *     of truth.
 *
 * Redirect matrix (all → 301):
 *   http://r6cheat.net/*      → https://r6cheat.net/*
 *   http://www.r6cheat.net/*  → https://r6cheat.net/*
 *   https://www.r6cheat.net/* → https://r6cheat.net/*
 *   https://r6cheat.net/*     → (no redirect — canonical, falls through)
 *
 * Paths and query strings are always preserved.
 */
import { resolvePathRedirect } from '../scripts/redirects.mjs';
import { resolveCheckoutPathRedirect } from '../src/config/checkout-redirects.mjs';

const APEX = 'r6cheat.net';
const CANONICAL_ORIGIN = `https://${APEX}`;

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // ── 1. Canonical host + scheme enforcement ──────────────────────────────
  // Redirect if the request arrived on a non-canonical host (www) or over HTTP.
  // Preserves pathname, search params, and hash.
  const needsHostFix = url.hostname === `www.${APEX}` || url.hostname !== APEX;
  const needsSchemeFix = url.protocol !== 'https:';

  if (needsHostFix || needsSchemeFix) {
    const canonical = new URL(url.pathname, CANONICAL_ORIGIN);
    canonical.search = url.search;
    canonical.hash = url.hash;
    return Response.redirect(canonical.toString(), 301);
  }

  // ── 2. Checkout short-links (external, 302) ─────────────────────────────
  const checkout = resolveCheckoutPathRedirect(url.pathname);
  if (checkout) {
    return Response.redirect(checkout, 302);
  }

  // ── 3. Internal path redirects (301) ────────────────────────────────────
  const pathRedirect = resolvePathRedirect(url.pathname);
  if (pathRedirect) {
    const dest = new URL(pathRedirect, CANONICAL_ORIGIN);
    dest.search = url.search;
    dest.hash = url.hash;
    return Response.redirect(dest.toString(), 301);
  }

  return context.next();
}
