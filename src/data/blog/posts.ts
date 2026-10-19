import type { BlogPostFull } from './types';
import { expandBlogPost } from './seoExpand';

const product = '/products/r6-cheats/';
const elite = '/products/r6-cheats/elite/';

const blogPostsRaw: BlogPostFull[] = [
  {
    featured: true,
    tag: 'R6 Cheats',
    // Homepage card title — keep stable
    title: 'R6 Siege Cheats Modules: ESP, Wallhack, Aimbot & More',
    slug: 'r6-cheats-features',
    image: '/images/blog/r6-cheats-features.jpeg',
    desc: 'Rainbow Six Siege cheats modules explained for 2026: ESP, wallhack overlays, aimbot, radar, recoil, and triggerbot — and why the live product page is the feature list.',
    date: 'Oct 12, 2026',
    readTime: '9 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Players search for Rainbow Six Siege cheats, R6 ESP, wallhack, and aimbot when they want overlay awareness or aiming help on Windows PC. This guide maps those module names the way top cheat blogs do — then points you to the [live product page](' + product + ') for price and status.',
      },
      { type: 'h2', text: 'What “R6 cheats” usually includes in 2026' },
      {
        type: 'p',
        text: 'Most PC listings group player ESP, wallhack-style overlays, aimbot, recoil helpers, radar, and misc tools. Competitors also talk about chams, gadget ESP, and stream-proof capture. Treat every label here as a category. Exact toggles change after Siege, BattlEye, and ShieldGuard updates.',
      },
      { type: 'h2', text: 'ESP and wallhack overlays' },
      {
        type: 'p',
        text: 'ESP and wallhack usually mean the same idea: an overlay that marks operators, health, distance, or gadgets through cover. Skeleton ESP, box ESP, snaplines, and chams are common display styles. For a deeper overlay walkthrough, read [R6 ESP & Wallhack Guide 2026](/blog/r6-esp-guide/) and [Wallhack vs ESP](/blog/r6-wallhack-vs-esp/).',
      },
      { type: 'h2', text: 'Aimbot, silent aim, and fire assists' },
      {
        type: 'ul',
        items: [
          'Aimbot: moves or holds aim toward a selected hitbox such as head, neck, or chest.',
          'Silent aim: aim help that is less obvious on the camera path.',
          'Triggerbot: fires when a valid target is already under the crosshair.',
          'Recoil helper: steadies spray; it is not the same module as aimbot.',
        ],
      },
      {
        type: 'p',
        text: 'Tuning FOV and smoothness is covered in [R6 Aimbot FOV & Smoothness Guide 2026](/blog/r6-aimbot-fov-smooth/). Compare helpers in [Triggerbot vs Aimbot](/blog/r6-triggerbot-vs-aimbot/) and [Silent Aim vs Aimbot](/blog/r6-silent-aim-explained/).',
      },
      { type: 'h2', text: 'Radar and misc cheat tools' },
      {
        type: 'p',
        text: 'Radar draws positions on a compact map so you can rotate without covering the whole HUD. Misc options often cover damage notifications and config save or load. See the [R6 Radar Hack Guide 2026](/blog/r6-radar-hack-guide/) when you need awareness beyond on-screen ESP boxes.',
      },
      { type: 'h2', text: 'Where to confirm live modules and price' },
      {
        type: 'p',
        text: 'Elite listing copy starts near $35 monthly and $150 lifetime when those plans are offered. Always re-check [Elite R6 Cheats](' + elite + ') after a patch. Status language is explained in [Undetected R6 Cheats status notes](/blog/r6-cheat-undetected-status/) and [BattlEye safety context](/blog/r6-battleye-safety/).',
      },
      {
        type: 'cta',
        title: 'Confirm the live cheat modules',
        text: 'ESP, wallhack, aimbot, and pricing are listed on the product page.',
        href: product,
      },
    ],
  },
  {
    tag: 'R6 Cheats',
    // Homepage card title — keep stable
    title: 'BattlEye, R6 Cheats & ESP: What Status Notes Really Mean',
    slug: 'r6-battleye-safety',
    image: '/images/blog/r6-battleye-safety.jpeg',
    desc: 'How BattlEye and R6 ShieldGuard updates affect Rainbow Six Siege cheats, ESP, and aimbot — and why a status note is never a permanent “undetected” clear.',
    date: 'Oct 9, 2026',
    readTime: '8 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Any R6 cheat that draws ESP, wallhack markers, or aimbot assistance sits next to BattlEye. Ubisoft also ships ShieldGuard and related enforcement. Status language on a product page is a snapshot, not a lifetime promise.',
      },
      { type: 'h2', text: 'Why cheat status changes after Siege patches' },
      {
        type: 'p',
        text: 'Siege, BattlEye, and ShieldGuard update on their own schedule. An ESP or aimbot build that matched the client yesterday can need a new note after a patch. If the listing says updating, testing, or offline, do not treat an older blog as clearance to play ranked.',
      },
      {
        type: 'ul',
        items: [
          'Read the current product note after every Siege or anti-cheat update.',
          'ESP, wallhack, and aimbot labels in articles are vocabulary — not live inventory.',
          'Account action remains possible with any third-party cheat tool.',
          '“Undetected” in search is marketing shorthand — see [this status guide](/blog/r6-cheat-undetected-status/).',
        ],
      },
      { type: 'h2', text: 'ESP and wallhack next to anti-cheat' },
      {
        type: 'p',
        text: 'ESP and wallhack overlays show information the normal camera hides. That is against the game rules. Reports, killcams, and BattlEye all exist around that risk. For what this listing includes today, use the [product page](' + product + '). For overlay wording, open the [ESP & wallhack guide](/blog/r6-esp-guide/).',
      },
      { type: 'h2', text: 'Practical checklist before you queue' },
      {
        type: 'ul',
        items: [
          'Open the live banner on r6cheat.net after every patch.',
          'Confirm Windows PC scope — console is out of scope.',
          'Do not launch while the note says offline or updating.',
          'Keep fair-play risk in mind even when a note looks calm.',
        ],
      },
      {
        type: 'cta',
        title: 'Check the current cheat note',
        text: 'Anti-cheat context in a blog is not a live clear-to-play signal for ESP or aimbot.',
        href: product,
      },
    ],
  },
  {
    tag: 'ESP & Aimbot',
    // Homepage card title — keep stable
    title: 'R6 Aimbot & ESP Setup Guide for Siege Cheats',
    slug: 'r6-esp-aimbot',
    image: '/images/blog/r6-esp-aimbot.jpeg',
    desc: 'R6 aimbot and ESP setup guide for Rainbow Six Siege cheats on PC: how wallhack overlays differ from FOV, smoothness, and triggerbot — before you open checkout.',
    date: 'Oct 2, 2026',
    readTime: '8 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Players mix ESP, wallhack, and aimbot when talking about Rainbow Six Siege cheats. They are different modules, and each one answers a different question mid-round. This setup-style guide matches how ranking blogs separate overlay awareness from aiming help.',
      },
      { type: 'h2', text: 'ESP vs wallhack vs aimbot' },
      {
        type: 'ul',
        items: [
          'ESP / wallhack: overlay information on operators, gadgets, or positions.',
          'Aimbot: aiming helper with FOV, smoothness, and hitbox options when present.',
          'Triggerbot: fire assist when a target is already under the crosshair.',
          'Recoil helper: spray control, separate from locking onto a player.',
        ],
      },
      { type: 'h2', text: 'Recommended reading order for first setup' },
      {
        type: 'ul',
        items: [
          '1. Learn overlay words in the [ESP & wallhack guide](/blog/r6-esp-guide/).',
          '2. Tune aim language with [FOV & smoothness](/blog/r6-aimbot-fov-smooth/).',
          '3. Read menu labels in [cheat settings](/blog/r6-cheat-settings/).',
          '4. Confirm modules and price on the [product page](' + product + ').',
        ],
      },
      { type: 'h2', text: 'What a setup guide does not replace' },
      {
        type: 'p',
        text: 'This page defines the words. Menu keys, defaults, and which cheat modules ship in the current build belong on the [product page](' + product + ') next to price and BattlEye status notes.',
      },
      {
        type: 'cta',
        title: 'View ESP and aimbot on the product page',
        text: 'Confirm the live module list before checkout.',
        href: product,
      },
    ],
  },
  {
    tag: 'Settings',
    title: 'R6 Aimbot Settings 2026: FOV, Smoothness, ESP Colors & Triggerbot',
    slug: 'r6-cheat-settings',
    image: '/images/blog/r6-cheat-settings.jpg',
    desc: 'R6 aimbot settings for 2026: FOV, smoothness, ESP colors, wallhack distance, radar, and triggerbot — so Rainbow Six Siege cheat menus are easier to read.',
    date: 'Sep 24, 2026',
    readTime: '7 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Top-ranking R6 aimbot guides focus on FOV, smoothness, and hitbox choice. Cheat menus for Siege also group ESP colors, wallhack distance, radar, and triggerbot. This post explains that vocabulary. It is not a click-by-click install.',
      },
      { type: 'h2', text: 'Common Rainbow Six Siege cheat setting labels' },
      {
        type: 'ul',
        items: [
          'Aimbot FOV and smoothness: how wide and how fast aim help engages.',
          'ESP / wallhack colors and distance: how far and how brightly markers draw.',
          'Radar: compact position display for rotates and holds.',
          'Triggerbot: optional fire assist with its own on or off state.',
          'Stream-proof: keeps an overlay off some capture paths — test a local recording yourself.',
        ],
      },
      { type: 'h2', text: 'Legit-style FOV habits players talk about' },
      {
        type: 'p',
        text: 'Ranking blogs often suggest a small FOV and higher smoothness so aim looks less obvious on replays. Exact numbers change by build — copy ranges from forums only after you confirm the same sliders exist on the [live listing](' + product + '). Deep FOV detail: [R6 Aimbot FOV & Smoothness Guide 2026](/blog/r6-aimbot-fov-smooth/).',
      },
      {
        type: 'p',
        text: 'Exact sliders change by build. After a patch, trust the [product page](' + product + ') over an older settings article.',
      },
      {
        type: 'cta',
        title: 'Open live cheat settings notes',
        text: 'Aimbot, ESP, and triggerbot language here is background. The live note is on the product page.',
        href: product,
      },
    ],
  },
  {
    tag: 'ESP & Wallhack',
    title: 'R6 ESP & Wallhack Guide 2026: How Overlay Cheats Work',
    slug: 'r6-esp-guide',
    image: '/images/blog/r6-esp-guide.jpeg',
    desc: 'R6 ESP and wallhack guide for 2026: what overlay cheats show in Rainbow Six Siege, how they differ from aimbot, and why a blog is not the live feature list.',
    date: 'Sep 17, 2026',
    readTime: '7 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'ESP and wallhack are the overlay side of R6 cheats: extra information drawn over the match. Aimbot is aiming help. Radar and recoil helpers are other slices. Keeping those words separate makes product notes easier to read — the same structure used by ranking wallhack guides.',
      },
      { type: 'h2', text: 'ESP and wallhack in plain language' },
      {
        type: 'p',
        text: 'ESP shows something the normal camera does not — operator name, health, a gadget, or a marker through cover. Wallhack is often used for the same overlay idea. Chams recolor models through walls when a build includes them. All of that breaks the game rules and sits next to BattlEye and player reports.',
      },
      { type: 'h2', text: 'ESP vs chams vs gadget ESP' },
      {
        type: 'ul',
        items: [
          'Player ESP: boxes, skeletons, names, health, and distance.',
          'Chams: recolored models through soft cover when listed.',
          'Gadget ESP: claymores, drones, traps, and utility markers.',
          'Snaplines: optional lines that clutter tight sites if left on.',
        ],
      },
      { type: 'h2', text: 'Headlines are not inventory' },
      {
        type: 'p',
        text: 'Search pages repeat ESP, wallhack, aimbot, and R6 cheats because those are the words people type. For what this listing includes now, open the [product page](' + product + '). For module categories, see [R6 Siege Cheats Modules](/blog/r6-cheats-features/). Compare labels in [Wallhack vs ESP](/blog/r6-wallhack-vs-esp/).',
      },
      {
        type: 'cta',
        title: 'See current ESP and wallhack notes',
        text: 'Overlay vocabulary lives here. The live cheat list is on the product page.',
        href: product,
      },
    ],
  },
  {
    tag: 'ESP & Wallhack',
    title: 'Wallhack vs ESP in R6 Siege: What’s the Difference? (2026)',
    slug: 'r6-wallhack-vs-esp',
    image: '/images/blog/r6-wallhack-vs-esp.jpg',
    desc: 'Wallhack vs ESP in Rainbow Six Siege cheats: how the labels overlap in 2026, what chams add, and what still belongs on the live product page.',
    date: 'Sep 11, 2026',
    readTime: '6 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'In R6 cheat discussions, wallhack and ESP almost always point at an overlay: seeing operators or gadgets through walls. Ranking blogs still publish “wallhack vs ESP” because players type both. The words differ; the idea is the same class of cheat module.',
      },
      { type: 'h2', text: 'How players use the two labels' },
      {
        type: 'ul',
        items: [
          'Wallhack: often the older shorthand for seeing through cover.',
          'ESP: usually the menu name for boxes, skeletons, names, and distance.',
          'Gadget ESP: the same overlay idea applied to traps, drones, and utility.',
          'Chams: model glow through walls when the build lists it separately.',
        ],
      },
      {
        type: 'p',
        text: 'Neither word tells you which styles ship today. That answer is on the [product page](' + product + '). For full overlay context, read the [ESP & wallhack guide](/blog/r6-esp-guide/).',
      },
      {
        type: 'cta',
        title: 'Compare live ESP options',
        text: 'Confirm wallhack-style overlays and ESP styles before you pay.',
        href: product,
      },
    ],
  },
  {
    tag: 'Aimbot',
    title: 'R6 Aimbot FOV & Smoothness Guide 2026 (Best Settings Explained)',
    slug: 'r6-aimbot-fov-smooth',
    image: '/images/blog/r6-aimbot-fov-smooth.jpg',
    desc: 'R6 aimbot FOV and smoothness guide for 2026: what the sliders mean in Rainbow Six Siege cheats, hitbox basics, and how they differ from ESP or wallhack.',
    date: 'Sep 4, 2026',
    readTime: '6 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Aimbot settings on Siege cheats often mention FOV and smoothness — the same pair ranking “best settings” guides emphasize. Those controls shape how aim help engages. They are not ESP or wallhack — overlays are a separate module.',
      },
      { type: 'h2', text: 'FOV and smoothness in plain terms' },
      {
        type: 'ul',
        items: [
          'FOV: how wide the aimbot looks for a valid target.',
          'Smoothness: how quickly or softly the aim path moves.',
          'Hitbox: which body zone the aimbot prefers when available (head, neck, chest).',
        ],
      },
      { type: 'h2', text: 'Why small FOV shows up in ranked discussions' },
      {
        type: 'p',
        text: 'Players who care about killcams often keep FOV tight and smoothness higher so the crosshair does not snap across the screen. That habit does not make a cheat “undetected.” BattlEye and reports still apply — see [status notes](/blog/r6-battleye-safety/).',
      },
      {
        type: 'p',
        text: 'Defaults and available sliders change by build. Read the [product page](' + product + ') for the current aimbot note instead of copying numbers from forums. Related: [cheat settings overview](/blog/r6-cheat-settings/).',
      },
      {
        type: 'cta',
        title: 'See current aimbot notes',
        text: 'FOV, smoothness, and hitbox language belong next to the live listing.',
        href: product,
      },
    ],
  },
  {
    tag: 'Aimbot',
    title: 'Silent Aim vs Aimbot in R6 Cheats (2026 Explained)',
    slug: 'r6-silent-aim-explained',
    image: '/images/blog/r6-silent-aim-explained.jpg',
    desc: 'Silent aim vs classic aimbot in Rainbow Six Siege cheats: what players usually mean in 2026 — without treating a blog as a live feature list.',
    date: 'Aug 28, 2026',
    readTime: '5 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Silent aim is a phrase Siege cheat users type next to standard aimbot. Classic aimbot often moves the view more clearly. Both sit in the aiming-helper category, separate from ESP and wallhack.',
      },
      { type: 'h2', text: 'Why the distinction matters for product notes' },
      {
        type: 'p',
        text: 'Product notes may list aimbot, silent aim, or both. An article can define the labels. It cannot promise which option is in today’s build. That stays on the [product page](' + product + '). Pair with [FOV & smoothness](/blog/r6-aimbot-fov-smooth/) when you tune aiming helpers.',
      },
      {
        type: 'cta',
        title: 'Check aimbot module notes',
        text: 'Confirm which aiming helpers are listed before checkout.',
        href: product,
      },
    ],
  },
  {
    tag: 'Triggerbot',
    title: 'Triggerbot vs Aimbot in Rainbow Six Siege Cheats',
    slug: 'r6-triggerbot-vs-aimbot',
    image: '/images/blog/r6-triggerbot-vs-aimbot.jpeg',
    desc: 'Triggerbot vs aimbot in Rainbow Six Siege cheats: how fire assist differs from aiming help, and how both differ from ESP wallhack overlays.',
    date: 'Aug 21, 2026',
    readTime: '5 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Aimbot moves or holds aim. Triggerbot fires when a valid target is already under the crosshair. ESP and wallhack only draw information. Mixing those labels makes cheat menus harder to read — and hurts search clarity when you compare listings.',
      },
      { type: 'h2', text: 'Quick comparison' },
      {
        type: 'ul',
        items: [
          'Aimbot: aiming assistance toward a hitbox.',
          'Triggerbot: fire assist without necessarily moving aim first.',
          'ESP / wallhack: overlay awareness, not automatic fire.',
        ],
      },
      {
        type: 'p',
        text: 'Which of those ship together depends on the tier and the current note on the [product page](' + product + '). See also [recoil scripts vs aimbot](/blog/r6-recoil-script-aimbot/).',
      },
      {
        type: 'cta',
        title: 'Compare live cheat modules',
        text: 'See how aimbot, triggerbot, and ESP are listed on the product page.',
        href: product,
      },
    ],
  },
  {
    tag: 'ESP & Wallhack',
    title: 'R6 ESP Colors & Distance Settings for Clean Wallhack Overlays',
    slug: 'r6-esp-colors-distance',
    image: '/images/blog/r6-esp-colors-distance.jpeg',
    desc: 'R6 ESP color and distance settings for clean wallhack overlays in Rainbow Six Siege cheats — without cluttering the HUD mid-round.',
    date: 'Aug 14, 2026',
    readTime: '5 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'ESP and wallhack overlays are only useful if you can read them mid-round. Color and max distance are the two settings players tune first on Siege cheats — the same advice ranking wallhack guides repeat.',
      },
      { type: 'h2', text: 'What those controls usually do' },
      {
        type: 'ul',
        items: [
          'Color: separates enemy, team, or gadget markers at a glance.',
          'Distance: limits how far ESP draws so far-away noise stays off screen.',
          'Box, skeleton, and snapline: display styles for the same wallhack idea.',
        ],
      },
      {
        type: 'p',
        text: 'Exact options vary. Confirm them on the [product page](' + product + ') instead of assuming every ESP style is always included. Broader overlay context: [ESP & wallhack guide](/blog/r6-esp-guide/).',
      },
      {
        type: 'cta',
        title: 'Review ESP overlay notes',
        text: 'Colors, distance, and wallhack-style markers are listed with the live build.',
        href: product,
      },
    ],
  },
  {
    tag: 'R6 Cheats',
    title: 'Undetected R6 Cheats 2026? What Status Notes Mean After BattlEye Patches',
    slug: 'r6-cheat-undetected-status',
    image: '/images/blog/r6-cheat-undetected-status.jpeg',
    desc: 'Undetected R6 cheats in 2026: what that search phrase means next to ESP and aimbot after BattlEye and ShieldGuard patches — and why you still read the live product note.',
    date: 'Aug 7, 2026',
    readTime: '7 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: '“Best undetected Rainbow Six Siege cheats” is a high-intent search. Undetected is marketing shorthand players type when looking for R6 cheats with ESP or aimbot. A status note is only current when it is posted. It is not a permanent shield against BattlEye, ShieldGuard, or account action.',
      },
      { type: 'h2', text: 'How to read a status note after a patch' },
      {
        type: 'ul',
        items: [
          'Treat the product page as the only live signal for ESP, wallhack, and aimbot builds.',
          'After a Siege patch, wait for an updated note instead of trusting an old blog or Discord screenshot.',
          'Risk remains with any third-party cheat, even when a note looks calm.',
          'Comparison blogs go stale the same day a provider updates — always re-check the listing you pay for.',
        ],
      },
      {
        type: 'p',
        text: 'For anti-cheat background, also read [BattlEye, R6 Cheats & ESP](/blog/r6-battleye-safety/). For modules, open the [product page](' + product + ').',
      },
      {
        type: 'cta',
        title: 'Read the live status note',
        text: 'ESP and aimbot availability after patches is listed on the product page.',
        href: product,
      },
    ],
  },
  {
    tag: 'ESP & Wallhack',
    title: 'R6 Radar Hack Guide 2026: Awareness Beyond ESP & Wallhack',
    slug: 'r6-radar-hack-guide',
    image: '/images/blog/r6-radar-hack-guide.jpeg',
    desc: 'R6 radar hack guide for 2026: how radar differs from ESP and wallhack overlays in Rainbow Six Siege cheats, and when to confirm it on the product page.',
    date: 'Jul 29, 2026',
    readTime: '6 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'A radar hack draws operator positions on a compact map. ESP and wallhack put markers on the main view. Both are awareness cheats; they answer different questions mid-round — a split ranking radar guides also use.',
      },
      { type: 'h2', text: 'Radar vs ESP wallhack' },
      {
        type: 'ul',
        items: [
          'Radar: rotate and hold info without covering the whole HUD.',
          'ESP / wallhack: on-screen boxes, skeletons, names, and gadget markers.',
          'Aimbot: separate aiming help, not a map overlay.',
        ],
      },
      {
        type: 'p',
        text: 'Whether radar ships with your tier is a [product page](' + product + ') question. Overlay deep-dive: [ESP & wallhack guide](/blog/r6-esp-guide/).',
      },
      {
        type: 'cta',
        title: 'See radar and ESP on the listing',
        text: 'Confirm radar hack and wallhack-style ESP modules before you pay.',
        href: product,
      },
    ],
  },
  {
    tag: 'Aimbot',
    title: 'R6 Recoil Script vs Aimbot 2026: Combat Cheats That Aren’t ESP',
    slug: 'r6-recoil-script-aimbot',
    image: '/images/blog/r6-recoil-script-aimbot.jpeg',
    desc: 'R6 recoil script vs aimbot in 2026: how combat helpers differ from ESP and wallhack in Rainbow Six Siege cheats — so product notes stay clear.',
    date: 'Jul 22, 2026',
    readTime: '6 min read',
    author: 'R6 Siege Cheats',
    body: [
      {
        type: 'p',
        text: 'Recoil scripts steady spray. Aimbot helps you track a hitbox. ESP and wallhack only draw information. Keeping those cheat types separate stops product notes from getting misread — and matches how comparison blogs split combat tools from overlays.',
      },
      { type: 'h2', text: 'Combat helpers vs overlays' },
      {
        type: 'ul',
        items: [
          'Recoil script: spray control for a weapon or operator profile.',
          'Aimbot: aiming assistance with FOV and smoothness when available.',
          'ESP / wallhack: awareness overlays, not automatic aim.',
        ],
      },
      {
        type: 'p',
        text: 'Per-operator presets and which helpers are included live on the [product page](' + product + '). Related: [triggerbot vs aimbot](/blog/r6-triggerbot-vs-aimbot/) and [FOV & smoothness](/blog/r6-aimbot-fov-smooth/).',
      },
      {
        type: 'cta',
        title: 'Check recoil and aimbot modules',
        text: 'Confirm combat cheat helpers separately from ESP wallhack overlays.',
        href: product,
      },
    ],
  },
];

export const blogPosts: BlogPostFull[] = blogPostsRaw.map(expandBlogPost);
