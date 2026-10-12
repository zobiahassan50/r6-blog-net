import { t } from '../i18n';
import { checkoutForSlug, R6_BUY_URL } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['r6-esp-guide', 'r6-cheats-features', 'r6-esp-aimbot', 'r6-battleye-safety'],
  pro: [
    'r6-esp-aimbot',
    'r6-cheat-settings',
    'r6-cheats-features',
    'r6-battleye-safety',
  ],
  elite: [
    'r6-cheats-features',
    'r6-esp-guide',
    'r6-esp-aimbot',
    'r6-battleye-safety',
    'r6-cheat-settings',
  ],
  ugc: [
    'r6-battleye-safety',
    'r6-cheats-features',
    'r6-esp-guide',
  ],
  'unlock-all': [
    'r6-cheats-features',
    'r6-esp-guide',
    'r6-cheat-settings',
  ],
};

const productBase = '/products/r6-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on r6cheat.net and Discord #status before purchase—especially after a Rainbow Six Siege or BattlEye update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite R6 cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Ubisoft Connect platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Quick Match.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Rainbow Six Siege and BattlEye receive frequent updates. Confirm module availability on the live status panel at r6cheat.net before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Rainbow Six Siege can violate Ubisoft Terms of Use and lead to BattlEye bans or account action. You use this software at your own risk. Compatibility and availability can change after game, BattlEye, or Windows updates without notice.';

const siegePcRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Rainbow Six Siege client via Ubisoft Connect with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Rainbow Six Siege published hardware requirements.' },
];

/** Requirements listed on the Rainbow Six Siege product page. */
const siegeSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10/11.' },
  { icon: 'reqCpu', text: 'Intel or AMD.' },
  { icon: 'reqSettings', text: 'HVCI on.' },
  { icon: 'reqShieldGuide', text: 'Core Isolation on.' },
  { icon: 'reqRestorePoint', text: 'TPM on.' },
  { icon: 'reqWifi', text: 'Secure Boot on.' },
  { icon: 'reqSteam', text: 'Cloud DMA required for full functionality.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/dota-2-map-hack.png`,
    alt: 'Rainbow Six Siege operator ESP showing enemy positions and gadgets',
    caption: 'Operator ESP awareness',
    captionDesc: 'Enemy position tracking, gadget ESP and plant timers during a ranked execute.',
  },
  gpScripts: {
    src: `${gameplay}/dota-2-scripts-combo.png`,
    alt: 'Rainbow Six Siege recoil profile on an entry fragger',
    caption: 'Recoil control',
    captionDesc: 'Per-operator recoil preset with aim assist held on an entry.',
  },
  gpZoomHack: {
    src: `${gameplay}/dota-2-zoom-hack.png`,
    alt: 'Rainbow Six Siege radar covering the site',
    caption: 'Site radar',
    captionDesc: 'Radar showing operator positions for safer holds and rotates.',
  },
  gpSkinChanger: {
    src: `${gameplay}/dota-2-skin-changer.png`,
    alt: 'Rainbow Six Siege skin preview on an operator uniform',
    caption: 'Skin Changer preview',
    captionDesc: 'Local elite uniform and weapon skin preview via Unlock All—client-side only.',
  },
  gpAutoKill: {
    src: `${gameplay}/dota-2-auto-kill-steal.png`,
    alt: 'Rainbow Six Siege aimbot target line on an operator',
    caption: 'Aimbot',
    captionDesc: 'Hitbox selection for head, chest, stomach, or pelvis, with a colored target line.',
  },
  gpFarmBot: {
    src: `${gameplay}/dota-2-farm-bot.png`,
    alt: 'Rainbow Six Siege player ESP with skeleton and box options',
    caption: 'Player ESP',
    captionDesc: 'Skeleton, box, snapline, name, health, armor, distance, and team check, out to 300m.',
  },
  gpHeroEsp: {
    src: `${gameplay}/dota-2-hero-esp.png`,
    alt: 'Rainbow Six Siege operator ESP with name tags and distance readouts',
    caption: 'Operator ESP overlay',
    captionDesc: 'Operator name, team check, and distance markers.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'r6-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'R6 Lite is the awareness slice of the Rainbow Six Siege listing: player ESP, gadget ESP, and radar on Windows PC. Aimbot and recoil stay on the fuller product notes.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Recoil control and bot modules entirely. Your gameplay looks natural while operator ESP, radar and plant timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'R6 Pro adds recoil control and aimbot options on top of player ESP. Smoothness, FOV, and hitbox selection are listed on the product page. Confirm that note before you pay.',
    },
    { type: 'h2', text: 'Scripts + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds recoil control, aimbot smoothness, and hitbox selection. Read the product page for the current modules before you pay.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'R6 Elite is the private build for players who want everything—Triggerbot, Low-HP trigger, Gadget assist, Skin Changer, full operator ESP and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Operator ESP with distance and name tags, gadget and trap ESP, plant timers, radar, and stream-safe overlay hiding. Config presets for ranked and Quick Match ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Scripts and automation' },
    {
      type: 'p',
      text: 'Recoil control, aimbot smoothness, customizable FOV, and hitbox selection for head, chest, stomach, or pelvis. The product page lists what the current build includes. Licenses start at $35.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at r6cheat.net—enough firepower for high-rank lobbies without Elite slot limits. Pair with our scripts guide in the blog before your first ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Player ESP, aimbot, separate recoil layers, and gadget ESP for Claymore, Drone, Thermite, Mute Jammer, Frost Trap, and Ela Mine. Monthly access is 31 days for $35. Lifetime access is $150.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Ubisoft Connect restrictions, BattlEye bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some BattlEye bans cannot be reversed. UGC organizes evidence and follow-ups for Ubisoft review.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpMapHack', 'gpZoomHack'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: siegePcRequirements,
    fullFeatures: [
      'Player ESP and boxes',
      'Gadget and trap ESP',
      'Site position awareness',
      'Operator name and health',
      'Operator ESP overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team check',
      'Gadget ESP',
      'Radar',
      'Quick Match preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear Rainbow Six Siege awareness workflow',
      paragraphs: [
        'R6 Lite focuses on operator ESP, gadget ESP, and radar for Rainbow Six Siege on Windows PC. Modules are grouped so you can tune distance, colors, and stream-proof mode before your first queue.',
        'Lite is the entry path for ranked and Quick Match players who want map awareness with minimal report risk. No Recoil control, no bots—just readable overlays maintained every patch at r6cheat.net.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpMapHack', 'gpHeroEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: siegePcRequirements,
    fullFeatures: [
      'All Lite ESP & operator ESP modules',
      'Recoil control scripts',
      'Trigger assist',
      'Aim assist & Prediction',
      'Target Selector',
      'Activator (flash/smoke/gadgets)',
      'Damage notifications',
      'Ability radius drawing',
      'Smoothness and FOV',
      'Per-operator profiles',
      'Smoke alert integration',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear Rainbow Six Siege scripts workflow',
      paragraphs: [
        'R6 Pro adds recoil control, aimbot, and triggerbot on top of every Lite module. Per-operator notes, smoothness, and FOV live on the product page. Confirm the current build before you pay.',
        'Pro is the most popular tier: enough firepower for ranked and Quick Match without Elite slot limits. Target Selector and Activator keep you efficient mid-fight while scripts stay human at default settings.',
      ],
    },
  },
  elite: {
    images: [
      {
        src: '/images/aimbotproduct.jpeg',
        alt: 'Rainbow Six Siege aimbot screenshot',
        caption: 'Aimbot',
        captionDesc: 'Enable aimbot, customizable FOV, smoothness, and hitbox selection for head, chest, stomach, or pelvis.',
      },
      {
        src: '/images/playerproduct.jpg',
        alt: 'Rainbow Six Siege player ESP screenshot',
        caption: 'Player ESP',
        captionDesc: 'Skeleton, box, snapline, name, health, armor, distance, and team check, out to 300m.',
      },
      {
        src: '/images/gadegtespproduct.jpeg',
        alt: 'Rainbow Six Siege gadget ESP screenshot',
        caption: 'Gadget ESP',
        captionDesc: 'Attacker gadgets such as Claymore, Drone, and Thermite, plus defender gadgets such as Mute Jammer, Frost Trap, and Ela Mine.',
      },
      {
        src: '/images/misc.jpeg',
        alt: 'Rainbow Six Siege misc options screenshot',
        caption: 'Misc',
        captionDesc: 'Damage notifications, plus save and load config.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: siegeSystemRequirements,
    fullFeatures: [
      'Enable aimbot',
      'Customizable FOV',
      'Draw FOV',
      'Smoothness',
      'Hitbox selection (Head, Chest, Stomach, Pelvis)',
      'Draw target line',
      'Color target line',
      'Enable ESP',
      'Skeleton (Normal, Outline, Glow, RGB)',
      'Skeleton line thickness',
      'Player name',
      'Head circle',
      'China hat',
      'View line',
      'Box (Normal, Cornered, 3D)',
      'Box line type (Full or Outline)',
      'Box line thickness',
      'Snapline (Top, Bottom, Middle)',
      'Snapline thickness',
      'Feet circle',
      'Health, armor, distance, and team check',
      'Max distance 300m',
      'Attacker gadget ESP: Claymore, Drone, Thermite, and more',
      'Defender gadget ESP: Mute Jammer, Frost Trap, Ela Mine',
      'Damage notifications',
      'Save config',
      'Load config',
    ],
    overview: {
      title: 'Player ESP, aimbot, and separate recoil layers',
      paragraphs: [
        'RAINBOW SIX SIEGE lists player ESP, aimbot, and separate recoil layers. Aimbot options cover an enable toggle, customizable FOV, draw FOV, smoothness, hitbox selection for head, chest, stomach, or pelvis, a target line, and target-line color. ESP options cover skeleton styles (normal, outline, glow, RGB), player name, head circle, China hat, view line, box styles (normal, cornered, 3D), snapline position, feet circle, health, armor, distance, team check, and a 300m max distance.',
        'Gadget ESP lists attacker gadgets (Claymore, Drone, Thermite, and more) and defender gadgets (Mute Jammer, Frost Trap, Ela Mine). Misc options are damage notifications plus save and load config. The menu groups these under Visuals, Aimbot, and Misc. Monthly access is 31 days for $35. Lifetime access is $150. The listing status is Active (4.9/5). Windows 10/11 on Intel or AMD is required, with HVCI, Core Isolation, TPM, and Secure Boot on. Cloud DMA is required for full functionality.',
      ],
    },
  },
  ugc: {
    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent BattlEye bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on r6cheat.net or at checkout on r6cheat.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpHeroEsp', 'gpMapHack'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Ubisoft Connect inventory or store state. Other players cannot see previewed elite uniforms or sets.',
    systemRequirements: siegePcRequirements,
    fullFeatures: [
      'Operator uniform preview',
      'Operator uniform and weapon skin preview',
      'Weapon preview',
      'Menu preview',
      'HUD preview',
      'Loadout preview',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse operator uniforms, weapon skins, and sets locally in Rainbow Six Siege—searchable catalog, favorites, and loadout export without modifying live Ubisoft Connect purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
      const displayName = cheat.name === 'Lite' ? 'R6 Lite' : cheat.name === 'Pro' ? 'R6 Pro' : cheat.name;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpScripts', 'gpAutoKill', 'gpFarmBot');

export const heroSlides = slide(
  'gpMapHack',
  'gpScripts',
  'gpZoomHack',
  'gpSkinChanger',
  'gpAutoKill',
  'gpFarmBot',
  'gpHeroEsp',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'RAINBOW SIX SIEGE: player ESP, aimbot, and separate recoil layers. Monthly is 31 days for $35. Lifetime is unlimited access for $150.',
  buyUrl: R6_BUY_URL,
};

export interface SiegeCatalogCard {
  label: string;
  title: string;
  href: string;
  buyUrl: string;
  features: string[];
  badge: string;
  variant?: 'essential' | 'popular' | 'limited';
  icon: IconName;
}

const siegeBuy = R6_BUY_URL;
const siegePage = `${productBase}elite/`;

/** Rainbow Six Siege cheat from Zadeyo. Aimbot, ESP, gadgets, and misc are features of that one product. */
export const siegeCatalogCards: SiegeCatalogCard[] = [
  {
    label: 'Monthly $35 · Lifetime $150',
    title: 'RAINBOW SIX SIEGE',
    href: siegePage,
    buyUrl: siegeBuy,
    features: [
      'Player ESP, aimbot, and separate recoil layers',
      'Monthly is 31 days for $35',
      'Lifetime is unlimited access for $150',
      'Status Active (4.9/5)',
      'Windows 10/11, Intel or AMD',
      'HVCI, Core Isolation, TPM, and Secure Boot on',
      'Cloud DMA required for full functionality',
    ],
    badge: 'Active',
    variant: 'popular',
    icon: 'crosshair',
  },
  {
    label: 'Included with Siege',
    title: 'Aimbot',
    href: siegePage,
    buyUrl: siegeBuy,
    features: [
      'Enable aimbot',
      'Customizable FOV',
      'Draw FOV',
      'Smoothness',
      'Hitbox selection (Head, Chest, Stomach, Pelvis)',
      'Draw target line',
      'Color target line',
    ],
    badge: 'Active',
    variant: 'essential',
    icon: 'crosshair',
  },
  {
    label: 'Included with Siege',
    title: 'Player ESP',
    href: siegePage,
    buyUrl: siegeBuy,
    features: [
      'Enable ESP',
      'Skeleton (Normal, Outline, Glow, RGB)',
      'Skeleton line thickness',
      'Player name, head circle, and China hat',
      'View line',
      'Box (Normal, Cornered, 3D)',
      'Box line type (Full or Outline) and thickness',
      'Snapline (Top, Bottom, Middle) and thickness',
      'Feet circle',
      'Health, armor, distance, and team check',
      'Max distance 300m',
    ],
    badge: 'Active',
    variant: 'essential',
    icon: 'eye',
  },
  {
    label: 'Included with Siege',
    title: 'Gadget ESP',
    href: siegePage,
    buyUrl: siegeBuy,
    features: [
      'Attacker gadgets: Claymore, Drone, Thermite, and more',
      'Defender gadgets: Mute Jammer, Frost Trap, Ela Mine',
    ],
    badge: 'Active',
    variant: 'essential',
    icon: 'radar',
  },
  {
    label: 'Included with Siege',
    title: 'Misc',
    href: siegePage,
    buyUrl: siegeBuy,
    features: ['Damage notifications', 'Save config', 'Load config', 'Menu tabs: Visuals, Aimbot, Misc'],
    badge: 'Active',
    variant: 'essential',
    icon: 'settings',
  },
];
