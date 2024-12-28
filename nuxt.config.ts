// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "pinia-plugin-persistedstate",
    "@nuxt/ui",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Red Hat Display": [100, 300, 400, 500, 700, 900], // Specify desired weights
        },
      },
    ],
  ],
  css: [
    "./assets/style/main.scss",
    "./assets/style/animations.scss",
    "./assets/style/design-system.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: '@use "./assets/style/variables.scss" as *;',
        },
      },
    },
  },
});
