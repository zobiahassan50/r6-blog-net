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

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'cost',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'How much does it cost?',
    a: a('Licenses start from $35. Longer access tiers may cost more. Confirm the live price on the external checkout page before paying.'),
  },
  {
    id: 'checkout',
    topic: 'setup',
    icon: 'faqProductsPage',
    q: 'Where does checkout happen?',
    a: a('Purchases are completed through an external Buy Now checkout. This site does not process cards or store payment details.'),
  },
  {
    id: 'consoles',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Is it available for consoles?',
    a: a('No. This product is scoped to Windows PC. Console versions are not supported.'),
  },
  {
    id: 'stream-proof',
    topic: 'safety',
    icon: 'faqStreamProof',
    q: 'Can I stream or record my gameplay while using the ESP?',
    a: a('Yes, our visual features are completely stream-proof. The ESP and radar overlays will not show up on OBS, Discord screen share, or standard recording software, keeping your gameplay footage looking entirely legitimate.'),
  },
  {
    id: 'aimbot-settings',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'How customizable are the aimbot settings?',
    a: a('You have full control over the configuration. You can adjust the field of view (FOV), smoothing, and target bone selection, allowing you to fine-tune the assistance from a subtle, natural-looking aim assist to a more aggressive playstyle.'),
  },
  {
    id: 'windows-setups',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Does this work on all modern Windows setups?',
    a: a('Our R6 modules support most current Windows 10 and Windows 11 builds for both Intel and AMD processors. We recommend checking the specific OS version requirements listed directly on the product page before completing your checkout.'),
  },
  {
    id: 'status-before-buy',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'How do I confirm current status before buying?',
    a: `Read the status note on the ${productPage} immediately before checkout, and review our ${antiCheatArticle} plus ${settingsArticle} before you buy.`,
  },
  {
    id: 'read-more',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Where can I read more before purchasing?',
    a: `Browse the ${articlesHub} for ${featuresOverview}, ${espAimbotArticle}, ${antiCheatContext}, ${settingsCoverage}, and ${hacksCoverage}.`,
  },
  {
    id: 'contact',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get in touch?',
    a: `Use the ${supportPage} for questions about our articles or this site. Checkout and payment issues are handled on the external checkout provider's side.`,
  },
];

const landingFaqIds = ['cost', 'consoles', 'stream-proof', 'aimbot-settings', 'windows-setups'];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => landingFaqIds.includes(f.id));
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
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

export function getProductFaqs(_slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  return getAllFaqs();
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return getAllFaqs();
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
