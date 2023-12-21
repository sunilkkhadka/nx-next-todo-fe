import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from '@skeleton/shared';

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: localePrefix
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
