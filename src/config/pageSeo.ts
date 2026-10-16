/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    // Meta only — does not change homepage UI. Primary keyword near front for SERP.
    title: 'Rainbow Six Siege Cheats | R6 ESP, Aimbot & PC Hacks',
    description:
      'Rainbow Six Siege cheats for Windows PC: ESP, wallhack, aimbot, radar, and recoil helpers. Read live product notes and status before checkout on r6cheat.net.',
  },
  '/products/r6-cheats/': {
    title: 'R6 Siege Cheats Products | ESP, Aimbot & Recoil',
    description:
      'Compare Rainbow Six Siege cheats on Windows PC: player ESP, aimbot, recoil layers, UGC, and Skin Changer. Monthly from $35 — confirm the live listing.',
  },
  '/products/r6-cheats/elite/': {
    title: 'Elite R6 Siege Cheats | ESP, Aimbot & Gadget ESP',
    description:
      'Elite Rainbow Six Siege cheats for Windows PC with player ESP, aimbot, gadget ESP, and config save/load. Monthly $35 or lifetime — check live status first.',
  },
  '/products/r6-cheats/ugc/': {
    title: 'UGC Account Recovery | Rainbow Six Siege PC',
    description:
      'UGC Account Recovery for Rainbow Six Siege on PC: Ubisoft Connect and BattlEye appeal workflows, case tracking, and dispute templates.',
  },
  '/products/r6-cheats/unlock-all/': {
    title: 'R6 Skin Changer Utility | Rainbow Six Siege PC',
    description:
      'Rainbow Six Siege Skin Changer utility for Windows PC: local cosmetic preview for operators and weapons without Ubisoft store purchases.',
  },
  '/products/r6-cheats/utilities/': {
    title: 'R6 Siege Utilities | UGC & Skin Changer',
    description:
      'Compare Rainbow Six Siege utilities: UGC Account Recovery vs Skin Changer. Pick the tool that fits, then open the full product page.',
  },
  '/blog/': {
    title: 'R6 Siege Cheats Blog | ESP, Aimbot & Patch Guides',
    description:
      'Rainbow Six Siege cheats guides for Windows PC: ESP, wallhack, aimbot setup, BattlEye patch checklists, and ranked config tips.',
  },
  '/forum/': {
    title: 'R6 Siege Cheats Forum | Guides, Patches & Q&A',
    description:
      'Rainbow Six Siege cheats forum for Windows PC: setup Q&A, patch-day checks, ESP and aimbot vocabulary, and links to live product notes.',
  },
  '/faq/': {
    title: 'Rainbow Six Siege FAQ | R6Cheats Answers',
    description:
      'FAQ for Rainbow Six Siege cheats on Windows PC: pricing, consoles, stream-proof ESP, aimbot settings, and how we source status notes.',
  },
  '/terms/': {
    title: 'Terms & Conditions | R6Cheats Siege Cheats',
    description:
      'Terms for R6Cheats Rainbow Six Siege products: licenses, checkout, refunds, fair-play risk, and Windows PC use on r6cheat.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | R6Cheats Siege Site Data',
    description:
      'Privacy Policy for r6cheat.net: analytics, cookies, Support contact data, and how R6Cheats handles Rainbow Six Siege site visitors.',
  },
  '/about/': {
    title: 'About R6Cheats | Rainbow Six Siege Guides',
    description:
      'About R6Cheats: Rainbow Six Siege cheat guides, Elite modules, utilities, patch notes, and how we publish status for Windows PC players.',
  },
  '/support/': {
    title: 'R6Cheats Support | Siege Loader & Checkout',
    description:
      'Support for Rainbow Six Siege cheats on Windows PC: loader setup, portal access, checkout help, and status questions after BattlEye patches.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
