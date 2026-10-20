import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Strict 301 redirect: www.r6cheat.net -> r6cheat.net
  if (url.hostname === 'www.r6cheat.net' || url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace(/^www\./, '');
    url.protocol = 'https:';
    return context.redirect(url.toString(), 301);
  }

  const destination = resolveCheckoutPathRedirect(url.pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }
  return next();
});
