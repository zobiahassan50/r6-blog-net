/** All checkout destinations use the Rainbow Six Siege affiliate link. */
export const CHECKOUT_URLS = {
  r6: 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege',
  skinChanger: 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege',
  ugc: 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/r6', CHECKOUT_URLS.r6],
  ['/go/r6/', CHECKOUT_URLS.r6],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
