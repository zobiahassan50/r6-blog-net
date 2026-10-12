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

export function responsiveSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
  format: 'webp' | 'avif' = 'webp',
): string {
  const toSrc = format === 'avif' ? avifSrc : webpSrc;
  return widths.map((width) => `${toSrc(src, width)} ${width}w`).join(', ');
}

/** Smallest variant — used as img src so Lighthouse and no-srcset clients get the right size. */
export function defaultWebpSrc(src: string, widths: readonly number[]): string {
  return webpSrc(src, widths[0] ?? 640);
}

/** Preferred LCP preload candidate for full-bleed backgrounds. */
export function heroBgPreloadHref(src = '/images/herobackground.png'): string {
  return webpSrc(src, 1280);
}
