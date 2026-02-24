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
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap({
    // Exclude noindex pages from the sitemap
    filter: (page) => !page.includes('/privacy-policy') && !page.includes('/terms-of-service') && !page.includes('/roi-calculator'),
    // Note: lastmod intentionally omitted — Google distrusts sitemaps that set
    // lastmod to the build date on every deploy. Omitting it lets Google rely on
    // its own crawl signals, which improves indexing trust & crawl efficiency.
  })],
});
