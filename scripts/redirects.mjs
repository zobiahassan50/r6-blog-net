/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/forum', '/forum/'],
  ['/products', '/products/r6-cheats/'],
  ['/products/', '/products/r6-cheats/'],
  ['/cheats', '/products/r6-cheats/'],
  ['/cheats/', '/products/r6-cheats/'],
  ['/cheats/lite', '/products/r6-cheats/elite/'],
  ['/cheats/lite/', '/products/r6-cheats/elite/'],
  ['/cheats/pro', '/products/r6-cheats/elite/'],
  ['/cheats/pro/', '/products/r6-cheats/elite/'],
  ['/cheats/elite', '/products/r6-cheats/elite/'],
  ['/cheats/elite/', '/products/r6-cheats/elite/'],
  ['/cheats/compare', '/blog/r6-cheats-features/'],
  ['/cheats/compare/', '/blog/r6-cheats-features/'],
  ['/blog/r6-siege-cheats-features-overview', '/blog/r6-cheats-features/'],
  ['/blog/r6-siege-cheats-features-overview/', '/blog/r6-cheats-features/'],
  ['/blog/r6-esp-wallhack-anti-cheat', '/blog/r6-battleye-safety/'],
  ['/blog/r6-esp-wallhack-anti-cheat/', '/blog/r6-battleye-safety/'],
  ['/blog/r6-esp-wallhack-aimbot', '/blog/r6-esp-aimbot/'],
  ['/blog/r6-esp-wallhack-aimbot/', '/blog/r6-esp-aimbot/'],
  ['/blog/r6-siege-settings-2026', '/blog/r6-cheat-settings/'],
  ['/blog/r6-siege-settings-2026/', '/blog/r6-cheat-settings/'],
  ['/blog/r6-hacks-and-esp', '/blog/r6-esp-guide/'],
  ['/blog/r6-hacks-and-esp/', '/blog/r6-esp-guide/'],
  ['/products/r6-cheats', '/products/r6-cheats/'],
  ['/products/r6-cheats/utilities', '/products/r6-cheats/utilities/'],
  ['/products/r6-cheats/lite', '/products/r6-cheats/elite/'],
  ['/products/r6-cheats/lite/', '/products/r6-cheats/elite/'],
  ['/products/r6-cheats/pro', '/products/r6-cheats/elite/'],
  ['/products/r6-cheats/pro/', '/products/r6-cheats/elite/'],
  ['/products/r6-cheats/skin-changer', '/products/r6-cheats/unlock-all/'],
  ['/products/r6-cheats/skin-changer/', '/products/r6-cheats/unlock-all/'],
  ['/products/r6-cheats/hwid-spoofer', '/products/r6-cheats/'],
  ['/products/r6-cheats/hwid-spoofer/', '/products/r6-cheats/'],
  ['/products/r6-cheats/account-recovery', '/products/r6-cheats/ugc/'],
  ['/products/r6-cheats/account-recovery/', '/products/r6-cheats/ugc/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    const withSlash = `${pathname}/`;
    return PATH_REDIRECTS.get(withSlash) ?? withSlash;
  }

  return null;
}
