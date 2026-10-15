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

/** Homepage-only FAQ — wording stays off the /faq/ page answers. */
const landingFaqs: SiteFaqItem[] = [
  {
    id: 'home-cost',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'What does access cost on the homepage listing?',
    a: a(
      'The homepage points at Rainbow Six Siege PC access that starts around $35 for a monthly window, with longer options priced higher on checkout. Always confirm the live figure before paying—home copy is a summary, not a receipt.',
    ),
  },
  {
    id: 'home-consoles',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Can I use these modules on PlayStation or Xbox?',
    a: a(
      'No. Everything described on this landing page targets the Windows PC Rainbow Six Siege client through Ubisoft Connect. Console builds are outside the listing.',
    ),
  },
  {
    id: 'home-stream',
    topic: 'safety',
    icon: 'faqStreamProof',
    q: 'Will overlays show up if I stream from the home PC build?',
    a: a(
      'Stream-proof modes are designed so ESP and radar layers stay off OBS and common capture paths when enabled. Still verify with a local recording before you go live after a patch.',
    ),
  },
  {
    id: 'home-aimbot',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'How much can I tune aim helpers from the marketing overview?',
    a: a(
      'The landing overview highlights FOV, smoothness, and bone selection as the usual controls. Exact sliders live on the product notes—treat the homepage as orientation, then open the listing for the live module list.',
    ),
  },
  {
    id: 'home-windows',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which Windows versions does the homepage assume?',
    a: a(
      'Marketing copy assumes current Windows 10 or Windows 11 on Intel or AMD with the usual security toggles enabled. Re-read the product requirements if your PC is locked down or older than those builds.',
    ),
  },
];

/** Canonical /faq/ answers — longer, unique to that route. */
export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'cost',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'How much does it cost?',
    a: a(
      'On the Rainbow Six Siege FAQ answers page we treat pricing as live: monthly access is commonly listed around $35 for 31 days, and lifetime options sit higher. Longer tiers can cost more. Confirm the external checkout total before you pay—this FAQ never stores card data.',
    ),
  },
  {
    id: 'checkout',
    topic: 'setup',
    icon: 'faqProductsPage',
    q: 'Where does checkout happen?',
    a: a(
      'Checkout for R6Cheats Answers topics completes on an external Buy Now provider. r6cheat.net does not process cards or keep payment credentials. Keep your order email handy for loader and Support follow-ups.',
    ),
  },
  {
    id: 'consoles',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Is it available for consoles?',
    a: a(
      'Console Rainbow Six Siege is not covered. This Rainbow Six Siege FAQ is scoped to Windows PC via Ubisoft Connect only. If you play exclusively on console, the modules described here do not apply.',
    ),
  },
  {
    id: 'stream-proof',
    topic: 'safety',
    icon: 'faqStreamProof',
    q: 'Can I stream or record my gameplay while using the ESP?',
    a: a(
      'When stream-proof options are enabled, ESP and radar overlays are intended to stay out of OBS, Discord screen share, and standard recorders. After every BattlEye or client update, capture a private clip to confirm the hide still holds before a public stream.',
    ),
  },
  {
    id: 'aimbot-settings',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'How customizable are the aimbot settings?',
    a: a(
      'Aim helpers typically expose field of view, smoothing, and target bone selection so you can keep assists subtle or more aggressive. The live product page lists which of those controls ship in the current build—use this FAQ as vocabulary, not as the inventory.',
    ),
  },
  {
    id: 'windows-setups',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Does this work on all modern Windows setups?',
    a: a(
      'Most current Windows 10 and Windows 11 installs on Intel or AMD are in scope. Secure Boot, HVCI, and Core Isolation expectations are called out on the listing. Check those notes before checkout if you run unusual security software.',
    ),
  },
  {
    id: 'status-before-buy',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'How do I confirm current status before buying?',
    a: `Read the status note on the ${productPage} immediately before checkout, and review our ${antiCheatArticle} plus ${settingsArticle} before you buy. Status can flip after a Siege or BattlEye patch within hours.`,
  },
  {
    id: 'read-more',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Where can I read more before purchasing?',
    a: `Browse the ${articlesHub} for ${featuresOverview}, ${espAimbotArticle}, ${antiCheatContext}, ${settingsCoverage}, and ${hacksCoverage}. Guides explain wording; the product notes remain the feature list that matters at payment time.`,
  },
  {
    id: 'contact',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get in touch?',
    a: `Use the ${supportPage} for article or site questions, including loader and checkout help routing. Payment disputes stay with the external checkout provider—include your order email when you write in.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return landingFaqs;
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Rainbow Six Siege FAQ',
  subtitle:
    'R6Cheats Answers for Rainbow Six Siege on Windows PC: how we source notes, what the listing covers, and how fair-play risk is framed before you buy.',
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
      q: `What is this “${readable}” guide for?`,
      a: a(
        `This article under the ${tag} tag explains terminology and habits around “${readable}”. It is not a substitute for the live product notes—use it to understand wording before you open ${ROUTES.products}.`,
      ),
    },
    {
      id: `blog-${slug}-buy`,
      topic: 'products',
      icon: 'faqProductsPage',
      q: `Should I buy after reading “${readable}”?`,
      a: a(
        `Only after you re-check modules, price, and status on the product page. Guides like “${readable}” stay educational; checkout still depends on the listing that is live the day you pay.`,
      ),
    },
    {
      id: `blog-${slug}-next`,
      topic: 'setup',
      icon: 'faqStatus',
      q: `What should I read next after “${readable}”?`,
      a: `Compare nearby posts in the ${articlesHub}, then skim the ${elitePage} or ${utilitiesPage} if you are choosing between combat modules and utilities. Return here if you need the vocabulary from “${readable}” again.`,
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
