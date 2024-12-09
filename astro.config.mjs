import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server", // Pour SSR (peut être 'static' si vous générez un site statique)
  adapter: netlify({
    // Ajoutez des options si nécessaire
    edge: false, // Si vous utilisez des fonctions Netlify Edge (par défaut: false)
    split: false, // Pour activer le code splitting dans Netlify (par défaut: false)
  }),
});
