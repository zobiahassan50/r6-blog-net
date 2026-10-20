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
    // Meta only — does not change homepage UI headings.
    title: 'R6 Cheats | Rainbow Six Siege ESP & Aimbot – r6cheat.net',
    description:
      'Best R6 cheats for Rainbow Six Siege: undetected ESP, aimbot, wallhack, radar for PC. Plans from $35/mo. Check live BattlEye status and buy on r6cheat.net.',
  },
  '/products/r6-cheats/': {
    title: 'R6 Cheats & Hacks | Rainbow Six Siege ESP, Aimbot, Wallhack',
    description:
      'Buy premium R6 cheats and hacks for Rainbow Six Siege. Get reliable ESP, aimbot, wallhack, radar, and recoil scripts for PC. Instant access from $35/mo.',
  },
  '/products/r6-cheats/elite/': {
    title: 'R6 ESP Aimbot Elite | Rainbow Six Siege Cheats',
    description:
      'Elite R6 cheats featuring advanced player ESP, wallhack overlays, aimbot FOV, gadget ESP, and radar. $35/mo or $150 lifetime access.',
  },
  '/products/r6-cheats/ugc/': {
    title: 'R6 UGC Account Recovery | Rainbow Six Siege BattlEye',
    description:
      'Rainbow Six Siege UGC Account Recovery for PC: Ubisoft Connect and BattlEye appeal workflows, case tracking and dispute templates. Not a guaranteed unban — $50.',
  },
  '/products/r6-cheats/unlock-all/': {
    title: 'R6 Skin Changer | Rainbow Six Siege Unlock All PC',
    description:
      'Rainbow Six Siege Skin Changer for PC: local operator and weapon cosmetic preview without Ubisoft store purchases. Unlock All locally — check listing notes.',
  },
  '/products/r6-cheats/utilities/': {
    title: 'R6 Siege Utilities | Skin Changer vs UGC Recovery',
    description:
      'Compare Rainbow Six Siege utilities: Skin Changer Unlock All vs UGC Account Recovery. Feature breakdown — pick the right tool and open the full product page.',
  },
  '/blog/': {
    title: 'R6 Cheats Blog | ESP, Aimbot & Wallhack Guides 2026',
    description:
      'Rainbow Six Siege cheats guides: ESP wallhack setup, aimbot FOV tuning, BattlEye status checks, radar and recoil scripts. Updated undetected-note tips for 2026.',
  },
  '/forum/': {
    title: 'R6 Cheats Forum | ESP Aimbot & Wallhack Q&A',
    description:
      'Rainbow Six Siege cheats forum: ESP and aimbot setup Q&A, patch-day BattlEye checks, wallhack vocabulary, and live product status updates on r6cheat.net.',
  },
  '/faq/': {
    title: 'R6 Cheats FAQ | ESP, Aimbot & Pricing 2026',
    description:
      'Frequently asked questions for R6 cheats and hacks. Learn about our ESP features, aimbot pricing, stream-proof wallhack overlays, and setup requirements.',
  },
  '/terms/': {
    title: 'Terms & Conditions | R6Cheats Rainbow Six Siege',
    description:
      'Terms for R6Cheats: digital license rules, checkout, no refunds for ESP and aimbot products, fair-play risk disclosure, and Windows PC use on r6cheat.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | R6Cheats – r6cheat.net',
    description:
      'Privacy Policy for r6cheat.net: analytics and cookie data collected, how Support contact info is handled, and your rights as a Rainbow Six Siege site visitor.',
  },
  '/about/': {
    title: 'About R6Cheats | Rainbow Six Siege ESP & Cheat Guides',
    description:
      'About R6Cheats: who we are, how we publish Rainbow Six Siege ESP and aimbot guides, Elite cheat module notes, BattlEye status updates, and cheat tips for PC.',
  },
  '/support/': {
    title: 'R6Cheats Support | Loader, Checkout & BattlEye Help',
    description:
      'Get help with R6 cheats: loader setup, portal access, checkout, ESP and aimbot config questions, plus BattlEye patch status — contact support now.',
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
