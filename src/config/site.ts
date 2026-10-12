/** Apex production domain (custom domain on Cloudflare Pages). */
export const SITE_DOMAIN = 'r6cheat.net';

/**
 * Absolute site origin used for canonical, Open Graph, JSON-LD, RSS, sitemap.
 * - Default: https://r6cheat.net (safe for production + when the custom domain is attached later)
 * - Override at build time with PUBLIC_SITE_URL (e.g. https://your-project.pages.dev) for preview-only SEO tags
 * Internal links stay relative so temp Pages URLs and the custom domain both work without redirects.
 */
function resolveSiteUrl(): string {
  const fromEnv =
    typeof import.meta !== 'undefined' && typeof import.meta.env?.PUBLIC_SITE_URL === 'string'
      ? import.meta.env.PUBLIC_SITE_URL.trim()
      : '';
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return `https://${SITE_DOMAIN}`;
}

export const SITE_URL = resolveSiteUrl();
export const PRODUCT_BASE = '/products/r6-cheats/';
export const TITLE_PREFIX = 'R6 Cheats & Hacks';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
