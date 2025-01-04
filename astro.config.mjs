// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: "https://kaeedev.github.io",
  base: "/Proyecto-11-Online-Forum/",
  integrations: [tailwind()]
});