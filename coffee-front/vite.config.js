// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/global/_fonts.scss";
          @import "@/scss/global/_variables.scss";
          @import "@/scss/global/_mixins.scss";
          @import "@/scss/global/_normalize.scss";
          @import "@/scss/global/_container.scss";
          @import "@/scss/global/_visually-hidden.scss";
          @import "@/scss/global/_background.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
