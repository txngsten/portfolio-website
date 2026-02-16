// @ts-check
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://txngsten.github.io",
  base: "/portfolio-website",

  integrations: [react()],
});
