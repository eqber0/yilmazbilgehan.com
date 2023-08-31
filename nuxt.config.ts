// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: "Bilgehan Yılmaz Portfolio",
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: [
    "~/assets/sass/app.scss",
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "swiper/css",
  ],
  modules: ["nuxt-swiper", "nuxt-icons", "@pinia/nuxt"],
  build: {
    transpile: ["gsap"],
  },
})
