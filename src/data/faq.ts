import type { IconName } from '../components/icons/types';
import { blogPostPath, normalizeInternalPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const productPage = link('product page', ROUTES.products);
const articlesHub = link('articles hub', ROUTES.blog);
const antiCheatArticle = link(
  'R6 ESP, wallhack and anti-cheat article',
  blogPostPath('r6-battleye-safety'),
);
const settingsArticle = link('settings terminology', blogPostPath('r6-cheat-settings'));
const featuresOverview = link('features overview', blogPostPath('r6-cheats-features'));
const espAimbotArticle = link('R6 ESP and wallhack terminology', blogPostPath('r6-esp-aimbot'));
const antiCheatContext = link('anti-cheat context', blogPostPath('r6-battleye-safety'));
const settingsCoverage = link('R6 settings', blogPostPath('r6-cheat-settings'));
const hacksCoverage = link('hacks & ESP coverage', blogPostPath('r6-esp-guide'));
const supportPage = link('Support page', ROUTES.support);
const elitePage = link('Elite R6 Siege Cheats listing', `${ROUTES.products}elite/`);
const utilitiesPage = link('Rainbow Six Siege utilities page', `${ROUTES.products}utilities/`);

import { faqData } from './faqData';
export { faqData };
export const siteFaqs: SiteFaqItem[] = faqData;

export function getLandingFaqs(): SiteFaqItem[] {
  return faqData;
}

export function getAllFaqs(): SiteFaqItem[] {
  return faqData;
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Rainbow Six Siege FAQ',
  subtitle: 'What this independent publication covers, how we source facts, and how fair-play topics are handled.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'R6 Siege Cheats FAQ',
  subtitle: 'What this site covers, how buying works, and how risk and fair play are handled.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

const productFaqBanks: Record<string, SiteFaqItem[]> = {
  elite: [
    {
      id: 'elite-what',
      topic: 'products',
      icon: 'faqAfterBuy',
      q: 'What is included in Elite R6 Siege Cheats?',
      a: a(
        'Elite R6 Siege Cheats focuses on player ESP, aimbot, gadget ESP, and config save/load for Rainbow Six Siege on Windows PC. Monthly access is commonly listed at $35 for 31 days; lifetime sits higher. Confirm the Elite listing before you pay.',
      ),
    },
    {
      id: 'elite-dma',
      topic: 'setup',
      icon: 'faqPlatforms',
      q: 'Does Elite require Cloud DMA?',
      a: a(
        'The Elite R6 Siege Cheats notes call out Cloud DMA for full functionality alongside Windows 10/11, Intel or AMD, and security features such as HVCI and Secure Boot. If DMA is unavailable on your rig, read the requirements block before checkout.',
      ),
    },
    {
      id: 'elite-status',
      topic: 'safety',
      icon: 'faqStatus',
      q: 'How should I read Elite status after a patch?',
      a: a(
        'Treat the Elite product banner as source of truth after BattlEye or Siege updates. If the note says updating or offline, wait—do not force ranked while the Elite build is marked unavailable.',
      ),
    },
  ],
  ugc: [
    {
      id: 'ugc-what',
      topic: 'products',
      icon: 'faqAfterBuy',
      q: 'What does UGC Account Recovery actually do?',
      a: a(
        'UGC Account Recovery structures appeal workflows for Ubisoft Connect restrictions and BattlEye holds. It organizes evidence and timelines; it does not promise a forced unban or bypass platform review.',
      ),
    },
    {
      id: 'ugc-vs-cheats',
      topic: 'setup',
      icon: 'faqProductsPage',
      q: 'Is UGC the same as Elite combat modules?',
      a: a(
        'No. UGC Account Recovery is a utility path about appeals and documentation. Combat ESP and aimbot live on the Elite listing—use UGC when your goal is recovery paperwork, not overlays.',
      ),
    },
    {
      id: 'ugc-evidence',
      topic: 'safety',
      icon: 'faqDiscordHelp',
      q: 'What should I prepare before opening a UGC case?',
      a: a(
        'Have the order email, platform account details, and restriction screenshots ready. Clear evidence speeds UGC Account Recovery workflows and keeps Discord hand-offs shorter.',
      ),
    },
  ],
  'unlock-all': [
    {
      id: 'skin-what',
      topic: 'products',
      icon: 'faqAfterBuy',
      q: 'What is the Skin Changer Utility for?',
      a: a(
        'The Skin Changer Utility (Unlock All) previews operator uniforms and weapon skins locally on your client. Other players still see your real Ubisoft Connect inventory—not the preview cosmetics.',
      ),
    },
    {
      id: 'skin-store',
      topic: 'setup',
      icon: 'faqProductsPage',
      q: 'Does Skin Changer modify the Ubisoft store?',
      a: a(
        'No. Skin Changer Utility previews stay client-side. It does not rewrite store purchases or gift cosmetics to other accounts.',
      ),
    },
    {
      id: 'skin-elite',
      topic: 'products',
      icon: 'faqWhichTierScripts',
      q: 'Can I get Skin Changer with Elite?',
      a: a(
        'Cosmetic preview is often bundled with Elite access and is also listed as a standalone Skin Changer Utility when you only need local previews without combat modules.',
      ),
    },
  ],
};

const defaultProductFaqs: SiteFaqItem[] = [
  {
    id: 'product-generic-price',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'Where do I confirm price for this product?',
    a: a(
      'Open this product’s checkout panel for the live total. Homepage and blog prices are summaries; only the listing you are viewing should be treated as current.',
    ),
  },
  {
    id: 'product-generic-os',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platform does this product page support?',
    a: a(
      'Unless stated otherwise, product pages on r6cheat.net target Windows PC Rainbow Six Siege through Ubisoft Connect—not console clients.',
    ),
  },
];

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  return productFaqBanks[slug] ?? defaultProductFaqs;
}

/** Per-article FAQ so blog pages do not reprint the global /faq/ answers. */
export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const readable = slug.replace(/-/g, ' ');
  return [
    {
      id: `blog-${slug}-scope`,
      topic: 'blog',
      icon: 'faqBlogVsCheats',
      q: `Does this “${readable}” guide cover Rainbow Six Siege cheats on PC?`,
      a: a(
        `Yes — this ${tag} article explains ESP, wallhack, aimbot, and related wording for Rainbow Six Siege on Windows PC. It is not a substitute for live product notes—use it to understand search terms before you open ${ROUTES.products}.`,
      ),
    },
    {
      id: `blog-${slug}-buy`,
      topic: 'products',
      icon: 'faqProductsPage',
      q: `Is “${readable}” enough to buy undetected R6 cheats?`,
      a: a(
        `No. “Undetected” language in blogs goes stale after BattlEye or ShieldGuard patches. Re-check modules, price, and status on the product page the day you pay. Guides like “${readable}” stay educational.`,
      ),
    },
    {
      id: `blog-${slug}-next`,
      topic: 'setup',
      icon: 'faqStatus',
      q: `What should I read next after “${readable}”?`,
      a: `Compare nearby ESP, wallhack, and aimbot posts in the ${articlesHub}, then skim the ${elitePage} or ${utilitiesPage} if you are choosing between combat modules and utilities. Return here if you need the vocabulary from “${readable}” again.`,
    },
  ];
}

export const compareRows = [
  { feature: 'Player ESP and boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Gadget and trap ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Gadget ESP', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Radar', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Operator ESP overlay', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Recoil control scripts', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Trigger assist & Aim assist', icon: 'compareOrbwalker' as const, lite: false, pro: true, elite: true },
  { feature: 'Target Selector', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Activator (flash/smoke/gadgets)', icon: 'compareActivator' as const, lite: false, pro: true, elite: true },
  { feature: 'Ability radius drawing', icon: 'compareAbilityRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoke alert integration', icon: 'compareSmokeAlert' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Low-HP trigger', icon: 'compareAutoKillSteal' as const, lite: false, pro: false, elite: true },
  { feature: 'Gadget assist', icon: 'compareAutoDagon' as const, lite: false, pro: false, elite: true },
  { feature: 'Full operator ESP suite', icon: 'compareFullMapHack' as const, lite: false, pro: false, elite: true },
  { feature: 'Skin Changer (Unlock All)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
