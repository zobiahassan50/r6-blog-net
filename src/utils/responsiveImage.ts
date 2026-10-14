import fs from 'node:fs';
import path from 'node:path';

const RASTER_EXT = /\.(png|jpe?g|webp|avif)$/i;

/** Product feature cards ~352px CSS → 400w / 640w for 2x. */
export const CARD_IMAGE_WIDTHS = [400, 640] as const;
export const CARD_IMAGE_SIZES = '(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw';

/** Hero slider / product main ~490–720px. */
export const HERO_IMAGE_WIDTHS = [512, 640, 960] as const;
export const HERO_IMAGE_SIZES = '(min-width: 1024px) 490px, 100vw';

/** Gallery main stage. */
export const GALLERY_IMAGE_WIDTHS = [640, 960, 1280] as const;
export const GALLERY_IMAGE_SIZES = '(min-width: 1024px) 720px, 100vw';

/** Thumbs ~148px CSS. */
export const THUMB_IMAGE_WIDTHS = [320, 400] as const;
export const THUMB_IMAGE_SIZES = '148px';

/** Full-bleed hero background. */
export const HERO_BG_WIDTHS = [640, 960, 1280, 1920] as const;
export const HERO_BG_SIZES = '100vw';

/** Blog / default. */
export const DEFAULT_IMAGE_WIDTHS = [640, 960] as const;

export function stripRasterExt(src: string): string {
  return src.replace(RASTER_EXT, '');
}

export function webpSrc(src: string, width: number): string {
  return `${stripRasterExt(src)}-${width}.webp`;
}

export function avifSrc(src: string, width: number): string {
  return `${stripRasterExt(src)}-${width}.avif`;
}

export function placeholderSrc(src: string): string {
  return `${stripRasterExt(src)}-placeholder.webp`;
}

export function responsiveSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
  format: 'webp' | 'avif' = 'webp',
): string | undefined {
  const toSrc = format === 'avif' ? avifSrc : webpSrc;
  const entries = widths
    .filter((width) => publicAssetExists(toSrc(src, width)))
    .map((width) => `${toSrc(src, width)} ${width}w`);
  return entries.length > 0 ? entries.join(', ') : undefined;
}

/** AVIF srcset only for widths that were kept (smaller than WebP). */
export function responsiveAvifSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
): string | undefined {
  return responsiveSrcSet(src, widths, 'avif');
}

export function publicAssetExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, '');
  return fs.existsSync(path.join(process.cwd(), 'public', relative));
}

/** Smallest variant — used as img src so Lighthouse and no-srcset clients get the right size. */
export function defaultWebpSrc(src: string, widths: readonly number[]): string {
  const candidate = webpSrc(src, widths[0] ?? 640);
  return publicAssetExists(candidate) ? candidate : src;
}

/** Preferred LCP preload candidate for full-bleed backgrounds (AVIF when available). */
export function heroBgPreloadHref(src = '/images/herobackground.png'): string {
  // 960w covers typical mobile 2x + mid desktop without over-fetching 1280/1920.
  const avif = avifSrc(src, 960);
  if (publicAssetExists(avif)) return avif;
  const webp = webpSrc(src, 960);
  if (publicAssetExists(webp)) return webp;
  return src;
}

export function heroBgPreloadType(
  src = '/images/herobackground.png',
): 'image/avif' | 'image/webp' | 'image/jpeg' | 'image/png' {
  if (publicAssetExists(avifSrc(src, 960))) return 'image/avif';
  if (publicAssetExists(webpSrc(src, 960))) return 'image/webp';
  return /\.png$/i.test(src) ? 'image/png' : 'image/jpeg';
}

export function heroBgPreloadSrcSet(src = '/images/herobackground.png'): string | undefined {
  const avifSet = responsiveAvifSrcSet(src, HERO_BG_WIDTHS);
  if (avifSet) return avifSet;
  return responsiveSrcSet(src, HERO_BG_WIDTHS, 'webp');
}
