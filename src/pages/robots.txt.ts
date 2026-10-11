import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error(
      'Set the site URL in astro.config.mjs to generate robots.txt.'
    );
  }

  const sitemapURL = new URL('sitemap-index.xml', site);
  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${sitemapURL.href}`
  ].join('\n');

  return new Response(`${robotsTxt}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
