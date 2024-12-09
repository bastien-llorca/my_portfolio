import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://github.com/bastien-llorca/Portfolio",
  base: "/Portfolio/", // Nom du dépôt (exemple)
  outDir: "./dist", // Assurez-vous que le dossier de sortie est correct
  integrations: [], // Ajoutez les intégrations nécessaires
  output: "server", // Passez en mode serveur
});
