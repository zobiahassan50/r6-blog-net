import type { BlogPostFull } from './types';

const product = '/products/r6-cheats/';

export const blogPosts: BlogPostFull[] = [
  {
    featured: true,
    tag: 'Features',
    title: 'Complete R6 Siege PC Modules & Features Breakdown',
    slug: 'r6-cheats-features',
    image: '/images/blog/r6-cheats-features.jpeg',
    desc: 'A plain walkthrough of the module categories on the listing, and why build-specific details belong on the product page instead of here.',
    date: 'Aug 20, 2026',
    readTime: '8 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'This article names the module categories people see on the R6 Siege Cheats listing for Windows PC. It does not replace the product page. Build notes, what is included right now, and price belong there, because those change after patches.',
      },
      { type: 'h2', text: 'What the listing groups together' },
      {
        type: 'ul',
        items: [
          'Overlay information such as ESP and wallhack-style player markers.',
          'Aim and recoil helpers, including what players call an aimbot or triggerbot.',
          'Radar, so positions can be read without covering the whole screen.',
          'Cosmetic preview tools that only change what you see locally.',
        ],
      },
      {
        type: 'p',
        text: 'Those names describe categories, not a promise that every control is available on every build. If a note on the [product page](' + product + ') disagrees with an older article, trust the product page.',
      },
      { type: 'h2', text: 'Why this page stays general' },
      {
        type: 'p',
        text: 'Siege updates and BattlEye updates move on their own schedule. A blog post that listed exact toggles would go stale the next patch day. The product page is the place that gets those notes.',
      },
      {
        type: 'p',
        text: 'Guides on this site are checklists. Forums are for short questions. This blog is the long read: what the words mean, and what they do not guarantee.',
      },
      { type: 'h2', text: 'Windows PC only' },
      {
        type: 'p',
        text: 'The listing is scoped to Rainbow Six Siege on Windows PC. Console versions are not part of this product. If you are not on Windows, stop at the compatibility notes before you look at checkout.',
      },
      {
        type: 'cta',
        title: 'Read the live product notes',
        text: 'Module list, compatibility, and price are on the product page. Confirm them before you pay.',
        href: product,
      },
    ],
  },
  {
    tag: 'R6 Cheats',
    title: 'BattlEye Explained: Navigating R6 Siege Anti-Cheat Systems',
    slug: 'r6-battleye-safety',
    image: '/images/blog/r6-battleye-safety.jpeg',
    desc: 'What BattlEye and Ubisoft’s anti-cheat work mean for players who see overlay and helper tools discussed around Siege — without treating “safe” as a permanent promise.',
    date: 'Aug 18, 2026',
    readTime: '7 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Rainbow Six Siege on PC is covered by BattlEye, and Ubisoft ships its own account and client checks around that. People use “ESP” and “wallhack” for overlays that draw operator information the game would normally hide. This article is about what those words mean next to anti-cheat, not a status board.',
      },
      { type: 'h2', text: 'Anti-cheat is not a single switch' },
      {
        type: 'p',
        text: 'BattlEye and the game client both update. A build that matched the game yesterday can be out of date after a patch. A status note is only current when it is posted. It is not a promise that the same note will still be true next week.',
      },
      {
        type: 'ul',
        items: [
          'Read the current product note after every Siege or anti-cheat update.',
          'If the note says updating, testing, or offline, do not treat an older blog post as clearance.',
          'Account action is possible with any third-party tool. That risk does not disappear because an article sounds calm.',
        ],
      },
      { type: 'h2', text: 'What ESP and wallhack refer to' },
      {
        type: 'p',
        text: 'In Siege discussions, ESP and wallhack usually mean an overlay: names, health, distance, or a marker for an operator who is not on your screen. Radar is the same idea drawn on a small map. None of those labels tell you whether a specific build is compatible today. That answer stays on the [product page](' + product + ').',
      },
      { type: 'h2', text: 'Fair play' },
      {
        type: 'p',
        text: 'These tools break the rules of the game. Other players can report what they see, and Ubisoft can act on an account. This site does not describe that risk as optional or temporary.',
      },
      {
        type: 'cta',
        title: 'Check the product note',
        text: 'Anti-cheat context in an article is not a live clear-to-play signal.',
        href: product,
      },
    ],
  },
  {
    tag: 'ESP & Aimbot',
    title: 'Mastering R6 Aimbot & ESP: The Complete Setup Guide',
    slug: 'r6-esp-aimbot',
    image: '/images/blog/r6-esp-aimbot.jpeg',
    desc: 'How players talk about overlays, aiming helpers, and Windows PC scope — and why console is out of the picture for this kind of software.',
    date: 'Aug 16, 2026',
    readTime: '7 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Siege players mix three labels: ESP, wallhack, and aimbot. They are not the same feature, and none of them are a console product. This listing is Windows PC only.',
      },
      { type: 'h2', text: 'How the labels are used' },
      {
        type: 'ul',
        items: [
          'ESP and wallhack: overlay information about operators, gadgets, or positions.',
          'Aimbot: an aiming helper that moves or holds aim for you. People also say “silent aim” for a version that is less obvious on the camera.',
          'Triggerbot: a fire assist that shoots when a target is already under the crosshair.',
          'Recoil helper: a control that steadies spray. It is not the same thing as an aimbot.',
        ],
      },
      {
        type: 'p',
        text: 'Which of those are in the current build is a product-page question. An article can define the words. It should not be treated as the feature list for checkout.',
      },
      { type: 'h2', text: 'Why console is out' },
      {
        type: 'p',
        text: 'This software is built for the Windows PC client. PlayStation and Xbox versions of Siege are a different platform, and this product does not support them. If the machine is not a Windows PC, the listing does not apply.',
      },
      { type: 'h2', text: 'What this article will not do' },
      {
        type: 'p',
        text: 'It will not walk through menus, keys, or how a helper is turned on. Those details change, and they belong with the live product notes on the [product page](' + product + '), next to the price.',
      },
      {
        type: 'cta',
        title: 'View the product page',
        text: 'Confirm Windows PC scope and the current module list before checkout.',
        href: product,
      },
    ],
  },
  {
    tag: 'Settings',
    title: 'Optimal R6 PC Settings: Radar, Recoil & Triggerbot Configs',
    slug: 'r6-cheat-settings',
    image: '/images/blog/r6-cheat-settings.jpg',
    desc: 'A plain read on how menus talk about recoil helpers, radar, triggerbots, and related controls so product notes make more sense.',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Product notes mention settings by category: recoil, radar, triggerbot, ESP, and stream-proof display options. This post explains that vocabulary so the notes are easier to read. It is not a click-by-click setup.',
      },
      { type: 'h2', text: 'What those menu words usually mean' },
      {
        type: 'ul',
        items: [
          'Recoil helper: a control aimed at spray, separate from aiming at a player.',
          'Radar: a compact position display, not the in-game compass.',
          'Triggerbot: optional fire assist with its own on or off state.',
          'ESP or wallhack: overlay markers. Distance and color options, when they exist, are display choices.',
          'Stream-proof: a display mode meant to keep an overlay off a capture. Test a local recording yourself; do not assume a label is enough.',
        ],
      },
      {
        type: 'p',
        text: 'Exact sliders and defaults are build-specific. After a patch, the [product page](' + product + ') is the note that matters, not a 2026 article that described an older menu.',
      },
      { type: 'h2', text: 'Before first launch' },
      {
        type: 'p',
        text: 'Confirm you are on Windows, that the Siege client is the PC version, and that you have read the current compatibility note. Delivery for this listing is digital after payment. If the status note says the build is offline, wait for an updated note instead of guessing from this page.',
      },
      {
        type: 'cta',
        title: 'Open the product notes',
        text: 'Settings language here is background. The live note is on the product page.',
        href: product,
      },
    ],
  },
  {
    tag: 'Hacks & ESP',
    title: 'Understanding R6 Siege ESP: Situational Awareness Mechanics',
    slug: 'r6-esp-guide',
    image: '/images/blog/r6-esp-guide.jpeg',
    desc: 'How “hacks” and ESP are used in Siege PC conversations, and how that differs from a live feature list.',
    date: 'Aug 12, 2026',
    readTime: '6 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: '“Hacks” is the broad word. ESP is one slice of it: extra information drawn over the match. Wallhack is often used for the same overlay idea. Aim help, radar, and recoil help are other slices. Lumping them into one word hides which part a product note is actually talking about.',
      },
      { type: 'h2', text: 'ESP in plain language' },
      {
        type: 'p',
        text: 'ESP means the overlay shows something the normal camera does not: an operator name, health, a gadget, or a position through cover. It is information on your screen. It is still against the game’s rules, and BattlEye plus player reports both exist around that.',
      },
      { type: 'h2', text: 'A blog is not the feature list' },
      {
        type: 'p',
        text: 'Search pages repeat “ESP”, “wallhack”, and “hacks” because those are the words people type. The words in a headline are not the inventory of the current build. Read the [product page](' + product + ') for what this listing includes, what it costs, and whether the note says the build is current.',
      },
      {
        type: 'p',
        text: 'For a category-by-category pass, start with [Complete R6 Siege PC Modules & Features Breakdown](/blog/r6-cheats-features/). For anti-cheat context, read [BattlEye Explained: Navigating R6 Siege Anti-Cheat Systems](/blog/r6-battleye-safety/).',
      },
      {
        type: 'cta',
        title: 'See the current listing',
        text: 'Headlines are vocabulary. The product page is the list.',
        href: product,
      },
    ],
  },
];
