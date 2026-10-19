/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 * Do not change `/` title/description for homepage UI work — meta only when needed.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    // Meta only — does not change homepage UI headings. Leave as-is unless asked.
    title: 'Rainbow Six Siege Cheats | R6 ESP, Aimbot & PC Hacks',
    description:
      'Rainbow Six Siege cheats for Windows PC: ESP, wallhack, aimbot, radar, and recoil helpers. Read live product notes and status before checkout on r6cheat.net.',
  },
  '/products/r6-cheats/': {
    title: 'Rainbow Six Siege Cheats | ESP Aimbot Recoil PC',
    description:
      'Buy Rainbow Six Siege cheats for Windows PC: player ESP, wallhack overlays, aimbot, recoil layers, UGC, and Skin Changer. From $35 — confirm live status first.',
  },
  '/products/r6-cheats/elite/': {
    title: 'Elite R6 Cheats 2026 | ESP Aimbot Gadget ESP',
    description:
      'Elite Rainbow Six Siege cheats for PC: player ESP, wallhack-style overlays, aimbot, gadget ESP, and cloud configs. Monthly $35 or lifetime — check BattlEye status.',
  },
  '/products/r6-cheats/ugc/': {
    title: 'UGC R6 Account Recovery | BattlEye Appeal PC',
    description:
      'UGC Account Recovery for Rainbow Six Siege on PC: Ubisoft Connect and BattlEye appeal workflows, case tracking, and dispute templates — not a guaranteed unban.',
  },
  '/products/r6-cheats/unlock-all/': {
    title: 'R6 Skin Changer 2026 | Local Unlock All PC',
    description:
      'Rainbow Six Siege Skin Changer for Windows PC: local operator and weapon cosmetic preview without Ubisoft store purchases. Confirm inclusion on the listing.',
  },
  '/products/r6-cheats/utilities/': {
    title: 'R6 Siege Utilities | UGC vs Skin Changer',
    description:
      'Compare Rainbow Six Siege utilities: UGC Account Recovery vs Skin Changer Unlock All. Pick the tool that fits, then open the full product page.',
  },
  '/blog/': {
    title: 'R6 Cheats Blog 2026 | ESP Wallhack Aimbot Guides',
    description:
      'Rainbow Six Siege cheats guides for PC: ESP, wallhack, aimbot FOV, BattlEye status, radar hacks, recoil scripts, and undetected-note checklists for 2026.',
  },
  '/forum/': {
    title: 'R6 Cheats Forum | ESP Aimbot Patch Q&A',
    description:
      'Rainbow Six Siege cheats forum: setup Q&A, patch-day checks, ESP and aimbot vocabulary, BattlEye notes, and links to live product status on r6cheat.net.',
  },
  '/faq/': {
    title: 'R6 Cheats FAQ | Price ESP Aimbot BattlEye',
    description:
      'FAQ for Rainbow Six Siege cheats on Windows PC: pricing from $35, consoles, stream-proof ESP, aimbot settings, and how we source BattlEye status notes.',
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
      'About R6Cheats: Rainbow Six Siege cheat guides, Elite ESP and aimbot modules, utilities, patch notes, and how we publish status for Windows PC players.',
  },
  '/support/': {
    title: 'R6Cheats Support | Loader Checkout BattlEye',
    description:
      'Support for Rainbow Six Siege cheats on Windows PC: loader setup, portal access, checkout help, and status questions after BattlEye or ShieldGuard patches.',
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
