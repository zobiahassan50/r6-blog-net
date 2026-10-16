export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [
      answer,
      detail,
      `For the full walkthrough, open “${input.sourceTitle}” on the blog after every Siege or BattlEye patch. This forum summary is a short Q&A only—it is not a substitute for the live product note or the source guide checklist.`,
    ],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-R6-map-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of operator, gadget, plant-timer, and smoke information covered by the awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Rainbow Six Siege operator ESP setup guide', sourcePath: '/blog/r6-esp-guide/',
    answer: 'The guide covers operator ESP, gadget and trap markers, plant timers, smoke alerts, and last-seen positions. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a team fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Rainbow Six Siege operator ESP setup guide', sourcePath: '/blog/r6-esp-guide/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a bot lobby before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The radar guide focuses on a site view you can still play from, without covering the killfeed.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Rainbow Six Siege radar guide', sourcePath: '/blog/r6-esp-aimbot/',
    answer: 'There is no single ideal radar size for every player. The guide recommends adjusting gradually and checking that you can still read the site, operators, and the killfeed.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do smoothness and FOV show up in the product notes?', upvotes: 32,
    excerpt: 'A practical question about aimbot smoothness, FOV, and why the settings article stays general.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Rainbow Six Siege recoil profiles for ranked', sourcePath: '/blog/r6-cheat-settings/',
    answer: 'The settings article explains how menus talk about recoil helpers, radar, and triggerbots. Exact sliders belong on the product page, because they change after patches.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'r6-aimbot-and-recoil', title: 'How do players talk about aimbot and recoil?', upvotes: 29,
    excerpt: 'Aim helpers and recoil helpers are separate modules. The article defines the words. The product page lists what is included.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Mastering R6 Aimbot & ESP: The Complete Setup Guide', sourcePath: '/blog/r6-esp-aimbot/',
    answer: 'An aim helper moves toward a target. A recoil helper steadies spray. A triggerbot fires when a target is already under the crosshair. They are not the same module.',
    detail: 'The article stays on Windows PC. Console versions are not supported. Build-specific toggles stay on the product page.',
    tip: 'Read the product note after a patch. An older article is not a current status.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'R6 Elite tier guide', sourcePath: '/blog/r6-cheats-features/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Triggerbot, Low-HP trigger, Gadget assist, and Skin Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on ESP and radar. Pro adds aim and recoil notes. Confirm both on the product page.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'R6 Lite vs Pro: which tier fits you', sourcePath: '/blog/r6-cheats-features/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as ESP, gadget and plant-timer information, and radar. Pro adds recoil and aim profiles on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the additional script modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Skin Changer utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Rainbow Six Siege Skin Changer guide', sourcePath: '/blog/r6-cheats-features/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-vac-cannot-verify', title: 'What should I do if BattlEye cannot verify my Rainbow Six Siege install?', upvotes: 24,
    excerpt: 'Start with Ubisoft Connect file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Ubisoft Anti-Cheat unable to verify Rainbow Six Siege', sourcePath: '/blog/r6-battleye-safety/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify Rainbow Six Siege files through Ubisoft Connect.',
    detail: 'It also recommends fully exiting Ubisoft Connect, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal Ubisoft Connect launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Rainbow Six Siege external cheat guide', sourcePath: '/blog/r6-battleye-safety/',
    answer: 'The article uses “external” to describe software that runs separately from the Rainbow Six Siege process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever Rainbow Six Siege receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Rainbow Six Siege', sourcePath: '/blog/r6-cheat-settings/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'After a PC or hardware change, check the product notes and contact support if the account or device needs a reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Rainbow Six Siege product notes', sourcePath: '/blog/r6-battleye-safety/',
    answer: 'Start by checking the account and device notes for your product, then contact support if something still looks wrong.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Rainbow Six Siege cheats features guide', sourcePath: '/blog/r6-cheats-features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-r6-product-tier', title: 'How do I choose the right Rainbow Six Siege product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy Rainbow Six Siege cheats in 2026', sourcePath: '/blog/r6-cheats-features/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'what-to-ask-before-buying-r6', category: 'General', categoryTone: 'purple',
    title: 'What should I ask before I buy?',
    excerpt: 'Ask about modules, price, and Windows PC scope. Confirm the notes on the product page before checkout.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Rainbow Six Siege feature overview', sourcePath: '/blog/r6-cheats-features/',
    body: [
      'Product questions belong here: modules, pricing, and what the product page covers for Windows PC. Confirm the notes there before you buy.',
      'Licenses often start near $35. Longer access can cost more. Checkout is external, and this forum preview does not store card details.',
      'If you are choosing between Elite combat modules and utilities such as UGC or Skin Changer, say which goal you have—awareness, scripts, recovery, or cosmetics—so answers stay on topic.',
    ],
    comments: [
      { author: 'site_reader', age: '1 hour ago', score: 24, body: 'I check the product page for the live price before I use Buy Now.' },
      { author: 'pc_only', age: '48 min. ago', score: 11, body: 'Console is not supported. This listing is the Siege PC client.' },
      { author: 'status_note', age: '35 min. ago', score: 8, body: 'An older blog post is not a current status. Read the product note first.' },
    ],
  },
  {
    slug: 'where-r6-setup-questions-go', category: 'General', categoryTone: 'purple',
    title: 'Where do setup questions go?',
    excerpt: 'Setup talk is for the Windows PC product. Step-by-step checklists live in the guides, not in this thread.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How Rainbow Six Siege tiers differ', sourcePath: '/blog/r6-cheat-settings/',
    body: ['Discuss setup questions for the Windows PC product. For a checklist, use the guides: confirm Windows, read the product notes, and know that delivery is digital after payment.', 'HVCI, Core Isolation, TPM, and Secure Boot are listed on the product page. Cloud DMA is required for full functionality.'],
    comments: [
      { author: 'windows_pc', age: '3 hours ago', score: 17, body: 'I confirm Windows 10 or 11 before I look at price.' },
      { author: 'guide_link', age: '2 hours ago', score: 9, body: 'The settings article explains the words. The product page lists the current modules.' },
    ],
  },
  {
    slug: 'practice-r6-site-setups', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to practice site setups?',
    excerpt: 'Use a private lobby and vision toggles to study sight lines, then restore normal fog and check the result.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Rainbow Six Siege ranked notes and tips', sourcePath: '/blog/r6-esp-guide/',
    body: ['Use a custom game to learn sites and operator setups. The product listing is separate: player ESP, aimbot, and recoil layers for Windows PC.', 'Gadget ESP on the product page names Claymore, Drone, Thermite, Mute Jammer, Frost Trap, and Ela Mine.'],
    comments: [
      { author: 'site_setup', age: '5 hours ago', score: 13, body: 'I learn the site in a custom game, then read the product note before ranked.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Radar is a compact site map. It is not the in-game compass.' },
    ],
  },
  {
    slug: 'what-to-check-after-a-r6-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a R6 patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a bot lobby before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'BattlEye patch day checklist', sourcePath: '/blog/r6-battleye-safety/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in a bot or Quick Match lobby before returning to ranked.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'patch_reader', age: '8 hours ago', score: 12, body: 'Testing after the update before ranked is the part I used to skip. Now I check the product note first.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'r6-aim-and-recoil', category: 'Community', categoryTone: 'green',
    title: 'Where are aim and recoil listed?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on vision tools; Pro adds script modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'R6 Lite vs Pro: feature comparison', sourcePath: '/blog/r6-cheats-features/',
    body: ['According to the comparison guide, Lite centers on operator ESP, gadget information, radar, and stream-proof options. Pro includes those features and adds recoil control, trigger assist, and aim assist.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'r6-settings-before-launch', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How do I read settings before the first launch?',
    excerpt: 'Menus talk about recoil helpers, radar, and triggerbots. The product page says which of those are in the current build.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Rainbow Six Siege feature overview', sourcePath: '/blog/r6-cheats-features/',
    body: [
      'The settings article is a plain read on how menus talk about recoil helpers, radar, triggerbots, and related controls so the product notes make more sense.',
      'It does not replace the product page. Price, modules, and status stay there—confirm those live fields before you pay.',
      'After you learn the vocabulary, open the Elite or utilities listing that matches your goal and re-check the status banner if Siege just patched.',
    ],
    comments: [
      { author: 'settings_reader', age: '20 hours ago', score: 10, body: 'I read the settings article first, then the product page, before Buy Now.' },
      { author: 'pc_only', age: '18 hours ago', score: 5, body: 'Windows PC only. Console versions are not supported.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
