// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "~/assets/sass/app.scss",
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "swiper/css",
  ],
  modules: ["nuxt-swiper"],
})
