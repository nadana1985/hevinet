import type { MetadataRoute } from 'next';

/**
 * Generates a robots.txt file for search engine crawlers.
 *
 * Allows all bots on public pages, disallows /admin, and
 * points to the generated sitemap.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
    ],
    sitemap: 'https://hevinet.in/sitemap.xml',
  };
}
