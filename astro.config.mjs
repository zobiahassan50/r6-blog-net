import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

/** Production: https://r6cheat.net. Preview: set PUBLIC_SITE_URL / SITE to the *.pages.dev URL. */
const site = (process.env.PUBLIC_SITE_URL || process.env.SITE || 'https://r6cheat.net').replace(
  /\/+$/,
  '',
);

export default defineConfig({
  site,
  trailingSlash: 'always',
  redirects: {
    '/products/': '/products/r6-cheats/',
    '/cheats/': '/products/r6-cheats/',
    '/cheats/lite/': '/products/r6-cheats/elite/',
    '/cheats/pro/': '/products/r6-cheats/elite/',
    '/cheats/elite/': '/products/r6-cheats/elite/',
    '/cheats/compare/': '/blog/r6-cheats-features/',
    '/blog/r6-siege-cheats-features-overview/': '/blog/r6-cheats-features/',
    '/blog/r6-esp-wallhack-anti-cheat/': '/blog/r6-battleye-safety/',
    '/blog/r6-esp-wallhack-aimbot/': '/blog/r6-esp-aimbot/',
    '/blog/r6-siege-settings-2026/': '/blog/r6-cheat-settings/',
    '/blog/r6-hacks-and-esp/': '/blog/r6-esp-guide/',
    '/products/r6-cheats/lite/': '/products/r6-cheats/elite/',
    '/products/r6-cheats/pro/': '/products/r6-cheats/elite/',
    '/products/r6-cheats/skin-changer/': '/products/r6-cheats/unlock-all/',
    '/products/r6-cheats/hwid-spoofer/': '/products/r6-cheats/',
    '/products/r6-cheats/account-recovery/': '/products/r6-cheats/ugc/',
    '/products/dota-2-cheats/': '/products/r6-cheats/',
    '/products/dota-2-cheats/utilities/': '/products/r6-cheats/utilities/',
    '/products/dota-2-cheats/lite/': '/products/r6-cheats/elite/',
    '/products/dota-2-cheats/pro/': '/products/r6-cheats/elite/',
    '/products/dota-2-cheats/elite/': '/products/r6-cheats/elite/',
    '/products/dota-2-cheats/ugc/': '/products/r6-cheats/ugc/',
    '/products/dota-2-cheats/unlock-all/': '/products/r6-cheats/unlock-all/',
    '/products/dota-2-cheats/skin-changer/': '/products/r6-cheats/unlock-all/',
    '/contact/': '/support/',
    '/go/r6/': 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege',
    '/go/skin-changer/': 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege',
    '/go/ugc/': 'https://zadeyo.com/go/ZOBIA?to=%2Fproducts%2Frainbow-six-siege',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      cssCodeSplit: true,
      target: 'es2022',
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          entryFileNames: '_astro/[name].[hash].js',
          chunkFileNames: '_astro/[name].[hash].js',
          assetFileNames: '_astro/[name].[hash][extname]',
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assetsInlineLimit: 1024,
  },
});
