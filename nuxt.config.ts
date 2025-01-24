// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "pinia-plugin-persistedstate",
    "nuxt3-lenis",
    "@nuxt/test-utils",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/image",
    "maz-ui/nuxt",
  ],
  image: {
    provider: "imagekit",
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/paranolacak/",
      modifiers: {
        format: "webp",
        fit: "cover",
      },
    },
  },
  css: [
    "./assets/style/main.scss",
    "./assets/style/animations.scss",
    "./assets/style/design-system.scss",
    "./assets/style/mob.scss",
    "./assets/style/transitions.scss",
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
