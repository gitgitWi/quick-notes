import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), tailwind(), preact()],
  site: 'https://gitgitWi.github.io',
  base: '/quick-notes',
});
