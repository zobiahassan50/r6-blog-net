import { t } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { getPageSeoEntry } from './pageSeo';

/** Prefer build-time PUBLIC_SITE_URL; otherwise production apex (r6cheat.net). */
export const SITE_ORIGIN = SITE_URL;

export const DEFAULT_OG_IMAGE = '/images/producthome.jpg';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @r6cheats */
export const TWITTER_SITE = (import.meta.env.PUBLIC_TWITTER_SITE as string | undefined) || '@r6cheats';

export const TWITTER_CREATOR = (import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined) || '@r6cheats';

export const DEFAULT_SOCIAL_SAME_AS = [
  'https://twitter.com/r6cheats',
  'https://www.youtube.com/@r6cheats',
  'https://discord.gg/r6cheats',
];

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return DEFAULT_SOCIAL_SAME_AS;
  const list = raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
  return list.length > 0 ? list : DEFAULT_SOCIAL_SAME_AS;
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;
  return { title: t.site.title, description: t.site.description };
}

export function formatMetaDescription(text: string): string {
  let clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length >= 120 && clean.length <= 155) {
    return clean;
  }
  if (clean.length < 120) {
    const pad = ' Read the Rainbow Six Siege guides and status on r6cheat.net.';
    const combined = `${clean}${clean.endsWith('.') ? '' : '.'}${pad}`;
    if (combined.length <= 155 && combined.length >= 120) return combined;
    if (combined.length < 120) {
      return `${clean}${clean.endsWith('.') ? '' : '.'} Read the Rainbow Six Siege cheats and guides overview on r6cheat.net.`;
    }
    return combined.slice(0, 150).trim() + '...';
  }
  // If > 155
  const cut = clean.slice(0, 150);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = lastSpace > 120 ? cut.slice(0, lastSpace) : cut;
  return trimmed.trim() + '...';
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const budget = Math.max(20, max - suffix.length - 1);
  let trimmed = keyword.slice(0, budget).trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace > 20) trimmed = trimmed.slice(0, lastSpace).trim();
  return `${trimmed}${suffix}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
