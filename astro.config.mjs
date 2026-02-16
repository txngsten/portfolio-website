// @ts-check
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://txngsten.github.io",
  base: "/portfolio-website", // remove if repo is username.github.io

  integrations: [react()],

  env: {
    schema: {
      CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
      REFRESH_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});
