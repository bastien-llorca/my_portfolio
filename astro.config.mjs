import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://github.com/bastien-llorca/Portfolio",
  base: "/Portfolio/", // Nom du dépôt (exemple)
});
