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

export const faqData: SiteFaqItem[] = [
  {
    id: 'cost',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'How much does it cost?',
    a: a(
      'Licenses start from $35. Longer access tiers may cost more. Confirm the live price on the external checkout page before paying.',
    ),
  },
  {
    id: 'checkout',
    topic: 'setup',
    icon: 'faqProductsPage',
    q: 'Where does checkout happen?',
    a: a(
      'Purchases are completed through an external Buy Now checkout. This site does not process cards or store payment details.',
    ),
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
    a: a(
      'Yes, our visual features are completely stream-proof. The ESP and radar overlays will not show up on OBS, Discord screen share, or standard recording software, keeping your gameplay footage looking entirely legitimate.',
    ),
  },
  {
    id: 'aimbot-settings',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'How customizable are the aimbot settings?',
    a: a(
      'You have full control over the configuration. You can adjust the field of view (FOV), smoothing, and target bone selection, allowing you to fine-tune the assistance from a subtle, natural-looking aim assist to a more aggressive playstyle.',
    ),
  },
  {
    id: 'windows-setups',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Does this work on all modern Windows setups?',
    a: a(
      'Our R6 modules support most current Windows 10 and Windows 11 builds for both Intel and AMD processors. We recommend checking the specific OS version requirements listed directly on the product page before completing your checkout.',
    ),
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
