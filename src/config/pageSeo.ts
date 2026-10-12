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
    // gscNote: Keep primary keyword "Rainbow Six Siege cheats" near front; trim if title truncates in SERP.
    title: 'R6 Siege Cheats | Rainbow Six Siege PC',
    description:
      'R6 Siege Cheats for Windows PC. ESP, wallhack, radar, and aim helpers, with product notes to read before you buy.',
  },
  '/products/r6-cheats/': {
    title: 'RAINBOW SIX SIEGE | ESP, Aimbot & Recoil',
    description:
      'Player ESP, aimbot, and separate recoil layers. Monthly is 31 days for $35. Lifetime is unlimited access for $150.',
  },
  '/products/r6-cheats/elite/': {
    title: 'RAINBOW SIX SIEGE | Player ESP & Aimbot',
    description:
      'Player ESP, aimbot, gadget ESP, and config save/load. Monthly $35 for 31 days, or lifetime access for $150.',
  },
  '/products/r6-cheats/utilities/': {
    title: 'Rainbow Six Siege Utilities | UGC & Skin Changer',
    description:
      'Choose UGC or Skin Changer—when each utility fits and links to full product pages.',
  },
  '/blog/': {
    title: 'Rainbow Six Siege Cheats Guides & Patch Notes',
    description:
      'Setup guides, Lite vs Pro comparisons, BattlEye patch checklists, and ranked config tips for R6 cheats.',
  },
  '/forum/': {
    title: 'Rainbow Six Siege Community Forum | R6Cheats',
    description: 'Join R6 players to discuss operators, setups, patch changes, guides, and community moments.',
  },
  '/faq/': {
    title: 'Rainbow Six Siege FAQ',
    description:
      'What this independent publication covers, how we source facts, and how fair-play topics are handled.',
  },
  '/terms/': {
    title: 'Terms & Conditions | R6Cheats',
    description:
      'Purchase terms, license use, and refund policy for R6Cheats products sold through r6cheat.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | R6Cheats',
    description:
      'How r6cheat.net uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About R6Cheats',
    description:
      'What R6Cheats publishes: Rainbow Six Siege cheat tiers, utilities, guides, and status notes at r6cheat.net.',
  },
  '/support/': {
    title: 'Support | R6Cheats',
    description:
      'Get help with loader setup and checkout for Rainbow Six Siege cheat tiers and utilities.',
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
