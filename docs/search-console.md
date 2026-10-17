# Search Console workflow (r6cheat.net)

## Cloudflare Pages: temp domain → custom domain

1. Deploy as usual. The `*.pages.dev` preview URL works with **relative** links — do not add host redirects in `_redirects`.
2. When ready, add `r6cheat.net` (and optionally `www`) in **Pages → Custom domains**. Let Cloudflare manage TLS.
3. Prefer apex `r6cheat.net`. Set a single **www → apex** 301 (never both directions). See `npm run cf:www-redirect` or [Cloudflare’s www redirect guide](https://developers.cloudflare.com/pages/how-to/www-redirect/).
4. Leave build env unset for production so canonicals/sitemap use `https://r6cheat.net`. Optional: set `PUBLIC_SITE_URL` only on preview builds if you want preview-specific tags.
5. After DNS is live, submit `https://r6cheat.net/sitemap.xml` in Search Console.

You verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `r6cheat.net` if it is not already there.
2. Under **Sitemaps**, submit: `https://r6cheat.net/sitemap.xml`
3. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For each query that already maps to a page on your site, open the matching path in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Adjust `title` and `description` so the primary query appears naturally in the title (keep under ~60 characters for the title where possible).
5. Deploy. Allow 1–2 weeks before judging click-through changes.

## Path cheat sheet

| Common query intent | Edit path in `pageSeo.ts` |
| ------------------- | ------------------------- |
| rainbow six siege cheats (broad) | `/` |
| product, price, modules | `/products/r6-cheats/` |
| esp, wallhack, aimbot | `/blog/`, product page |
| utilities | `/products/r6-cheats/utilities/` |
| purchase / refund | `/terms/`, `/contact/` |

Product and blog article pages still use their own titles from content; add entries to `PAGE_SEO` only when you want a fixed override for a specific pathname.
