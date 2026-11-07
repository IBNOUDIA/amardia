import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amardia.ca',
  i18n: { locales: ['fr', 'en'], defaultLocale: 'fr' },
});
