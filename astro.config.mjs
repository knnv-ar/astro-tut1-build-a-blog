import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tut1-build-a-blog.netlify.app/",
  integrations: [preact()]
});