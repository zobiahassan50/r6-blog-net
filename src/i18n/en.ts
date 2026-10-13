import type { Translations } from './types';
import { R6_BUY_URL } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'R6Cheats',
    domain: 'r6cheat.net',
    title: 'R6 Cheats & Hacks | Rainbow Six Siege ESP, Recoil & Radar',
    description:
      'Rainbow Six Siege cheats with scripts, operator ESP, radar and skin changer for PC ranked—updated every patch at r6cheat.net.',
    discord: R6_BUY_URL,
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Rainbow Six Siege · PC',
    eyebrow: 'Rainbow Six Siege · PC',
    titleLine1: 'R6 Siege',
    titleLine2: 'R6 Cheats — Aimbot, ESP & Hacks',
    subtitle:
      'Premium R6 Siege cheats for Windows PC, featuring customizable aimbot, ESP, and wallhacks. Check the product page for live module status and pricing before checking out, or explore our blogs for detailed setup guides.',
    ctaPrimary: 'View Product',
    ctaDiscord: 'Buy Now',
    modesLabel: 'Playlists',
    modes: ['Ranked', 'Quick Match', 'Unranked', 'Standard'],
    metrics: [
      { label: 'Platform', strong: 'Windows' },
      { label: 'Starts at', strong: '$35' },
      { label: 'Delivery', strong: 'Digital' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Modules',
    title: 'What the listing covers',
    subtitle: 'ESP, wallhack, aim helpers, radar, and recoil tools for Rainbow Six Siege on Windows PC. Exact modules stay on the product page.',
    items: [
      {
        title: 'Scripts',
        subtitle: 'Aim and recoil.',
        desc: 'The listing groups aim helpers and recoil tools for Rainbow Six Siege on Windows PC. Which ones are in the current build is on the product page.',
        bullets: [
          'Aim helper, separate from a recoil helper',
          'Recoil helper for spray control',
          'Triggerbot listed as its own module',
          'Per-operator notes belong on the product page',
          'Windows PC only — console is not supported',
        ],
        tags: ['aim helper', 'recoil', 'siege pc'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Operator ESP',
        subtitle: 'Overlay information.',
        desc: 'ESP and wallhack are the words players use for markers the normal Siege camera does not show.',
        bullets: [
          'Operator name, health, and distance',
          'Gadget and trap markers',
          'A wallhack is overlay information, not a separate game mode',
        ],
        tags: ['esp', 'wallhack', 'operators'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Radar & Objectives',
        subtitle: 'A compact site map.',
        desc: 'Radar is a small position display for the round. It is not the in-game compass.',
        bullets: ['Operator positions around the site', 'Last-seen markers', 'Kept off the killfeed'],
        tags: ['radar', 'site', 'positions'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Recoil control',
        subtitle: 'Spray, not aim.',
        desc: 'A recoil helper steadies spray. It is not the same module as an aimbot.',
        bullets: ['Listed apart from the aim helper', 'Talked about per operator on the product page', 'Confirm it is in the current build before you pay'],
        tags: ['recoil', 'spray', 'aimbot'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extras on the listing.',
        desc: 'Cosmetic preview and stream-proof display sit beside ESP and aim modules. Other players still see your real inventory.',
        bullets: [
          'Local uniform and weapon preview',
          'Does not change the Ubisoft store inventory',
          'Stream-proof is a display option — test a local recording yourself',
        ],
        tags: ['gadget esp', 'configs', 'stream proof'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Triggerbot',
        subtitle: 'Fire assist.',
        desc: 'A triggerbot fires when a target is already under the crosshair. It is not an aimbot.',
        bullets: [
          'Separate from the aim helper',
          'On or off in the product notes',
          'Windows PC only',
          'Ranked and Quick Match are both PC playlists',
        ],
        tags: ['triggerbot', 'crosshair', 'pc'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Radar',
        subtitle: 'Positions, not the compass.',
        desc: 'Use radar to read the site. Keep it small enough that it does not cover the killfeed.',
        bullets: ['Operator positions', 'Pairs with ESP', 'Windows PC client only'],
        tags: ['radar', 'camera', 'vision'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Re-check after patches.',
        desc: 'Siege and BattlEye both update. A status note is only current when it is posted — an older article is not clearance.',
        bullets: ['Read the product note after every patch', 'Stop if the note says updating or offline', 'Price and modules are on the product page'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why this listing',
    title: 'Product notes, not promises',
    subtitle:
      'R6 Siege Cheats is a Windows PC listing for Rainbow Six Siege. Articles explain ESP, wallhack, and aim helpers. The product page is where price, modules, and status notes live.',
    usLabel: 'R6 Siege Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Windows PC only',
        desc: 'This product is for the Siege PC client. Console versions are not supported.',
      },
      {
        title: 'Status notes after patches',
        desc: 'BattlEye and the game both update. Re-read the product note before you launch. An old article is not clearance.',
      },
      {
        title: 'Blogs are not the feature list',
        desc: 'Posts define the words. The product page says what the current build includes and what it costs.',
      },
      {
        title: 'Fair play is part of the page',
        desc: 'Third-party tools can lead to account action. A status note is not a promise that nothing will change.',
      },
      {
        title: 'Digital delivery',
        desc: 'Access is delivered after payment. Confirm the live price on checkout before you pay. Licenses start at $35.',
      },
      {
        title: 'Support if delivery looks wrong',
        desc: 'Questions about access after purchase go to Support, with the order email you used at checkout.',
      },
    ],
    metrics: [
      {
        value: 'PC',
        title: 'Windows only',
        desc: 'Rainbow Six Siege on Windows. Not PlayStation or Xbox.',
      },
      {
        value: '$35',
        title: 'Starting price',
        desc: 'Longer access can cost more. Confirm the price on the checkout page.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Help with delivery and access after you buy.',
      },
    ],
  },
  setup: {
    eyebrow: 'Getting started',
    titleLead: 'Before you pay, confirm',
    titleHighlight: 'Windows PC',
    intro:
      'A short checklist: you are on Windows, you have read the live product notes, and you know delivery is digital after payment.',
    ctaPrimary: 'View Product',
    ctaSecondary: 'Read the FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Confirm Windows PC',
        desc: 'This listing is the Rainbow Six Siege PC client. Console is out.',
      },
      {
        step: 'Step 2',
        title: 'Read the product notes',
        desc: 'Check modules and the live price. Licenses start at $35. Longer access can cost more.',
      },
      {
        step: 'Step 3',
        title: 'Re-check status after patches',
        desc: 'If the note says updating or offline, wait. Account action is possible with any third-party tool.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Rainbow Six Siege after updates.',
    items: ['Windows 10 & 11', 'Siege PC client', 'Not console', 'Product notes', 'Digital delivery', 'Status notes', 'Blogs & FAQ', 'Support'],
  },
  cheats: {
    eyebrow: 'Product',
    title: 'RAINBOW SIX SIEGE',
    subtitle: 'Player ESP, aimbot, and separate recoil layers.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Active',
        tier: 'R6',
        name: 'RAINBOW SIX SIEGE',
        title: 'RAINBOW SIX SIEGE',
        desc: 'Player ESP, aimbot, and separate recoil layers. Monthly is 31 days for $35. Lifetime is unlimited access for $150. Listed status is Active (4.9/5).',
        features: [
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
        more: 0,
        href: `${productBase}elite/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'RAINBOW SIX SIEGE',
    subtitle:
      'Player ESP, aimbot, and separate recoil layers. Monthly is 31 days for $35. Lifetime is unlimited access for $150. Windows 10/11 on Intel or AMD, with HVCI, Core Isolation, TPM, and Secure Boot on. Cloud DMA is required for full functionality.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Ubisoft Connect restrictions, BattlEye bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Changer',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Lightweight Skin Changer for operator uniforms, weapon skins, and rare variants—local preview without Ubisoft Connect store purchases.',
        features: ['Operator uniform preview', 'Weapon skin preview', 'Loadout preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    heroTitle: 'R6 Siege Cheats Blogs',
    subtitle: 'Long-form articles on features, terminology, and fair play.',
    searchPlaceholder: 'Search articles',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Features',
        title: 'Complete R6 Siege PC Modules & Features Breakdown',
        slug: 'r6-cheats-features',
        image: '/images/blog/r6-cheats-features.jpeg',
        desc: 'A plain walkthrough of the module categories on the listing, and why build-specific details belong on the product page instead of here.',
        date: 'Aug 20, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'R6 Cheats',
        title: 'BattlEye Explained: Navigating R6 Siege Anti-Cheat Systems',
        slug: 'r6-battleye-safety',
        image: '/images/blog/r6-battleye-safety.jpeg',
        desc: 'What BattlEye and Ubisoft anti-cheat work mean for overlay and helper tools around Siege, without treating safe as a permanent promise.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'ESP & Aimbot',
        title: 'Mastering R6 Aimbot & ESP: The Complete Setup Guide',
        slug: 'r6-esp-aimbot',
        image: '/images/blog/r6-esp-aimbot.jpeg',
        desc: 'How players talk about overlays, aiming helpers, and Windows PC scope, and why console is out of the picture.',
        date: 'Aug 16, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Settings',
        title: 'Optimal R6 PC Settings: Radar, Recoil & Triggerbot Configs',
        slug: 'r6-cheat-settings',
        image: '/images/blog/r6-cheat-settings.jpg',
        desc: 'How menus talk about recoil helpers, radar, triggerbots, and related controls so product notes make more sense.',
        date: 'Aug 14, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Hacks & ESP',
        title: 'Understanding R6 Siege ESP: Situational Awareness Mechanics',
        slug: 'r6-esp-guide',
        image: '/images/blog/r6-esp-guide.jpeg',
        desc: 'How hacks and ESP are used in Siege PC conversations, and how that differs from a live feature list.',
        date: 'Aug 12, 2026',
        readTime: '6 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Scripts', title: 'Profiles that follow your operator', desc: 'Recoil control, trigger assist, aim assist and delay settings in one tab.' },
      { num: '02', label: 'Vision', title: 'Operator ESP that stays readable', desc: 'Filter by distance, team color, gadget type and alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Plant timer and rotates on lock', desc: 'Plant timers, enemy hints and radar on a compact overlay.' },
      { num: '04', label: 'Heroes', title: 'Per-operator profiles', desc: 'Save Ash, Jäger, Ace and anchor setups and swap them with hotkeys.' },
      { num: '05', label: 'Bots', title: 'Trigger assist', desc: 'Triggerbot with a delay slider and separate presets for ranked and Quick Match.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Quick Match and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From product notes to',
    titleHighlight: 'Windows PC.',
    subtitle: 'The same path the R6 Siege Cheats page describes: confirm the platform, read the notes, pay, then re-check status after patches.',
    ctaLabel: 'View Product',
    ctaHref: productBase,
    ctaSecondary: 'Read the FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Confirm Siege on PC',
        desc: 'Windows only. If you are on console, this product does not apply.',
      },
      {
        num: '02',
        phase: 'Product page',
        title: 'Read modules and price',
        desc: 'ESP, wallhack, radar, and aim helpers are categories. The product page says what is included now.',
      },
      {
        num: '03',
        phase: 'Checkout',
        title: 'Pay for digital access',
        desc: 'Licenses start at $35. Confirm the live price on the checkout page before you pay.',
      },
      {
        num: '04',
        phase: 'After a patch',
        title: 'Read the status note',
        desc: 'BattlEye and Siege both update. Do not treat an older blog post as a current status.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Rainbow Six Siege plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and operator ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on access after checkout? Support answers with the order email you used—not a copy-paste thread.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'R6Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: R6_BUY_URL,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader and account issues.",
        linkLabel: 'support@r6cheat.net',
        href: 'mailto:support@r6cheat.net',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on r6cheat.net or via our secure checkout.' },
      { title: 'Platform', desc: 'Ubisoft Connect on Windows 10 or 11—and your Rainbow Six Siege client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Ubisoft Connect.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Rainbow Six Siege FAQ',
    subtitle: 'What this independent publication covers, how we source facts, and how fair-play topics are handled.',
    items: [
      {
        num: '01',
        q: 'What is R6 Siege Cheats?',
        a: 'R6 Siege Cheats is a third-party Windows PC product listing for Rainbow Six Siege, paired with original articles on features, buying, compatibility, and risk. Current modules and pricing are listed on the product page.',
      },
      {
        num: '02',
        q: 'How much does it cost?',
        a: 'Licenses start from $35. Longer access tiers may cost more. Confirm the live price on the external checkout page before paying.',
      },
      {
        num: '03',
        q: 'Where does checkout happen?',
        a: 'Purchases are completed through an external Buy Now checkout. This site does not process cards or store payment details.',
      },
      {
        num: '04',
        q: 'Is it available for consoles?',
        a: 'No. This product is scoped to Windows PC. Console versions are not supported.',
      },
      {
        num: '05',
        q: 'Can I stream or record my gameplay while using the ESP?',
        a: 'Yes, our visual features are completely stream-proof. The ESP and radar overlays will not show up on OBS, Discord screen share, or standard recording software, keeping your gameplay footage looking entirely legitimate.',
      },
      {
        num: '06',
        q: 'How customizable are the aimbot settings?',
        a: 'You have full control over the configuration. You can adjust the field of view (FOV), smoothing, and target bone selection, allowing you to fine-tune the assistance from a subtle, natural-looking aim assist to a more aggressive playstyle.',
      },
      {
        num: '07',
        q: 'Does this work on all modern Windows setups?',
        a: 'Our R6 modules support most current Windows 10 and Windows 11 builds for both Intel and AMD processors. We recommend checking the specific OS version requirements listed directly on the product page before completing your checkout.',
      },
      {
        num: '08',
        q: 'How do I confirm current status before buying?',
        a: 'Read the status note on the product page immediately before checkout, and review the R6 ESP, wallhack and anti-cheat article plus settings terminology before you buy.',
      },
      {
        num: '09',
        q: 'Where can I read more before purchasing?',
        a: 'Browse the articles hub for features overview, R6 ESP and wallhack terminology, anti-cheat context, R6 settings, and hacks and ESP coverage.',
      },
      {
        num: '10',
        q: 'How do I get in touch?',
        a: 'Use the Support page for questions about our articles or this site. Checkout and payment issues are handled on the external checkout provider side.',
      },
    ],
  },
  footer: {
    tagline: 'Rainbow Six Siege cheats — scripts, operator ESP and tools for PC. r6cheat.net',
    explore: 'Explore',
    exploreLinks: [
      { href: '/#features', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/r6-cheats/elite/', label: 'Elite R6 cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/r6-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About R6Cheats',
      description:
        'R6Cheats provides Rainbow Six Siege cheat tiers, utility tools and PC support resources at r6cheat.net.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'R6Cheats is a PC-focused resource for Rainbow Six Siege players exploring scripts, operator ESP, radar and Skin Changer workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate R6 cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Lite, Pro, and Elite cheat tiers, Skin Changer, and account recovery workflows. Blog articles explain ranked-safe configs, patch-day checks, and BattlEye update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Ubisoft Connect account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How R6Cheats handles analytics, cookies, and contact data when you use r6cheat.net.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on r6cheat.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for R6Cheats products and r6cheat.net.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using r6cheat.net or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Rainbow Six Siege cheat tiers (Lite, Pro, Elite) and utility tools (UGC, Skin Changer / Unlock All) delivered through an operator portal and loader for Ubisoft Connect on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Rainbow Six Siege or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. r6cheat.net does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Rainbow Six Siege.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, BattlEye penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Ubisoft Connect Rainbow Six Siege on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Rainbow Six Siege build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Rainbow Six Siege can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'R6Cheats Support',
      description:
        'Get support for loader and checkout questions at r6cheat.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'R6Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join R6Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
};
