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
    defaultStrategy: 'hover',
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap({
    // Exclude noindex pages from the sitemap
    filter: (page) => !page.includes('/privacy-policy') && !page.includes('/terms-of-service'),
    serialize(item) {
      item.lastmod = new Date().toISOString().split('T')[0];
      return item;
    },
  })],
});
