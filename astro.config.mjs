// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Explicitly set the root directory (defaults to where astro.config.mjs is located)
  root: ".",
  // Explicitly set the src directory (defaults to './src')
  srcDir: "./src",
  // Explicitly set the public directory (defaults to './public')
  publicDir: "./public",
  integrations: [tailwind(), react()],
});
