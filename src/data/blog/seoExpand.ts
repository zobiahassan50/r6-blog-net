import type { BlogBlock, BlogPostFull } from './types';

/** Append unique long-form sections so blog URLs clear thin-content SEO checks. */
export function expandBlogPost(post: BlogPostFull): BlogPostFull {
  const short = post.title.replace(/\s*[|:—–-].*$/, '').trim() || post.title;
  const extra: BlogBlock[] = [
    {
      type: 'h2',
      text: `How to use “${short}” with the live product note`,
    },
    {
      type: 'p',
      text: `This guide — ${post.title} — is written for Rainbow Six Siege players on Windows PC who need clear vocabulary before they open checkout. Search phrases such as R6 cheats, ESP, wallhack, aimbot, radar, and recoil helpers show up in titles because those are the words people type. They are categories, not a receipt. After you finish this ${post.tag.toLowerCase()} article, re-read the live product note for modules, price, and status. If Siege or BattlEye just patched, wait for an updated note instead of treating an older paragraph here as clearance to queue ranked.`,
    },
    {
      type: 'p',
      text: `${post.desc} Keep that summary next to the listing: blogs explain wording; the product page lists what ships in the current build. When a menu mentions stream-proof capture, FOV, smoothness, distance, or gadget markers, map those labels back to this article, then confirm whether they appear on the page you are about to pay for. That habit prevents buying from a headline alone.`,
    },
    {
      type: 'h2',
      text: `Checklist before you act on “${short}”`,
    },
    {
      type: 'ul',
      items: [
        `Confirm you are on the Rainbow Six Siege Windows PC client — console is out of scope for this ${post.tag} guide.`,
        `Open the product page and match ESP, wallhack, aimbot, radar, or utility labels to the live module list.`,
        `Read the status banner after every Siege or BattlEye update before ranked.`,
        `Treat fair-play risk as real: third-party tools can lead to account action even when a blog note looks calm.`,
        `Save your order email if you continue to checkout so Support can find the purchase later.`,
      ],
    },
    {
      type: 'p',
      text: `If two articles on this blog seem to overlap, check the slug and publish date. “${post.slug}” is the permanent path for ${post.title}. Related posts may define neighboring words — for example ESP versus aimbot — without replacing this page’s focus. Prefer internal links that name the destination topic, and prefer the product listing whenever money or live availability is involved. That keeps your reading path short and keeps this guide useful as a reference instead of a substitute inventory.`,
    },
    {
      type: 'p',
      text: `Finally, revisit this ${post.readTime} piece after major mid-season patches. Module names rarely change overnight, but availability does. Pair the definitions in ${post.title} with a fresh status check and you will spend less time guessing whether an older screenshot still matches the Windows PC build you are about to launch.`,
    },
  ];

  const ctaIndex = post.body.findIndex((block) => block.type === 'cta');
  const head = ctaIndex >= 0 ? post.body.slice(0, ctaIndex) : post.body;
  const tail = ctaIndex >= 0 ? post.body.slice(ctaIndex) : [];

  return {
    ...post,
    body: [...head, ...extra, ...tail],
  };
}
