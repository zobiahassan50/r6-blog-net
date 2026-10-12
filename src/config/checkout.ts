import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  r6: 'r6',
  skinChanger: 'skin-changer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Public Rainbow Six Siege checkout. All buy / try / checkout buttons use this URL. */
export const R6_BUY_URL = 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege';

/** Checkout href used by buy buttons (visible affiliate link, same tab). */
export function checkoutPath(_product: CheckoutProduct = 'r6'): string {
  return R6_BUY_URL;
}

/** Default product checkout CTA. */
export const PRIMARY_CHECKOUT_PATH = R6_BUY_URL;

/** Map internal product slugs to the Rainbow Six Siege checkout link. */
export function checkoutForSlug(_slug: string): string {
  return R6_BUY_URL;
}

/** Resolve blog CTA or legacy href values to the public checkout link. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    if (href.startsWith('/go/')) return R6_BUY_URL;
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return R6_BUY_URL;
    }
  }

  if (
    href.includes('%2Fproducts%2Fcloud-dma') ||
    href.includes('/products/cloud-dma') ||
    href.includes('%2Fproducts%2Fskin-changer') ||
    href.includes('/products/skin-changer') ||
    href.includes('%2Fproducts%2Fugc') ||
    href.includes('/products/ugc') ||
    href.includes('%2Fproducts%2Frainbow-six-siege-cheats') ||
    href.includes('/products/rainbow-six-siege-cheats') ||
    href.includes('%2Fproducts%2Frainbow-six-siege') ||
    href.includes('/products/rainbow-six-siege') ||
    href.includes('/products/r6') ||
    href.includes('/go/ZOBIA')
  ) {
    return R6_BUY_URL;
  }

  return href;
}
