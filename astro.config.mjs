import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ionova.ai',
  trailingSlash: 'never',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap({
    // Exclude noindex pages from the sitemap
    filter: (page) =>
      !page.includes('/roi-calculator'),

    // Note: lastmod intentionally omitted — Google distrusts sitemaps that set
    // lastmod to the build date on every deploy. Omitting it lets Google rely on
    // its own crawl signals, which improves indexing trust & crawl efficiency.

    // Priority + changefreq signals help Google understand crawl importance hierarchy
    serialize(item) {
      const url = item.url.replace(/\/$/, ''); // normalise trailing slash

      // Homepage — highest signal
      if (url === 'https://ionova.ai') {
        return { ...item, changefreq: 'weekly', priority: 1.0 };
      }

      // Primary hub pages — address + entity are top-tier (0.9)
      const tier1Hubs = [
        'https://ionova.ai/address-intelligence',
        'https://ionova.ai/entity-intelligence',
      ];
      if (tier1Hubs.includes(url)) {
        return { ...item, changefreq: 'monthly', priority: 0.9 };
      }

      // Blog index — high priority, updated frequently
      if (url === 'https://ionova.ai/blogs') {
        return { ...item, changefreq: 'weekly', priority: 0.8 };
      }

      // Company — informational, lower priority
      if (url === 'https://ionova.ai/company') {
        return { ...item, changefreq: 'monthly', priority: 0.7 };
      }

      // Demo — key conversion page
      if (url === 'https://ionova.ai/demo') {
        return { ...item, changefreq: 'monthly', priority: 0.6 };
      }

      // Blog posts — evergreen content, lower crawl frequency
      if (url.includes('/blog/')) {
        return { ...item, changefreq: 'monthly', priority: 0.7 };
      }

      // Legal pages — low priority, included for completeness
      if (url.includes('/privacy-policy') || url.includes('/terms-of-service')) {
        return { ...item, changefreq: 'yearly', priority: 0.3 };
      }

      // Entity Intelligence sub-pages — priority 0.7 per spec
      if (url.includes('/entity-intelligence/')) {
        return { ...item, changefreq: 'monthly', priority: 0.7 };
      }

      // Address Intelligence sub-pages and any remaining pages
      return { ...item, changefreq: 'monthly', priority: 0.8 };
    },
  })],
});
