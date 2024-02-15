// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  ssr: true,
  app: {
    head: {
      title: "Bilgehan Yılmaz",
      meta: [
        {
          name: "description",
          content:
            "A Frontend Developer based in Turkey, passionate about crafting engaging and visually appealing websites and web applications. Continually striving for excellence, leveraging the latest technologies to deliver compelling and seamless user experiences.",
        },

        { name: "og:title", content: "Bilgehan Yılmaz" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://yilmazbilgehan.com" },
        {
          name: "og:image",
          content:
            "https://firebasestorage.googleapis.com/v0/b/yilmazbilgehan-7c443.appspot.com/o/og-image.png?alt=media&token=b4b5b3c8-deb4-4a0a-b57f-bec23186bc0e",
        },
        {
          name: "og:desciption",
          content:
            "A Frontend Developer based in Turkey, passionate about crafting engaging and visually appealing websites and web applications. Continually striving for excellence, leveraging the latest technologies to deliver compelling and seamless user experiences.",
        },
        { name: "og:image:width", content: "1230" },
        { name: "og:image:height", content: "730" },
      ],

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
  modules: ["nuxt-swiper", "nuxt-icons", "@pinia/nuxt", "nuxt-gtag"],
  build: {
    transpile: ["gsap"],
  },

  gtag: {
    id: "G-213S54WXN0",
  },
})
