export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Personel Website - Bilgehan Yilmaz",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
      },
    ],
  },

  server: {
    host: "0",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/sass/app.scss", "swiper/swiper-bundle.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/swiper-client.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/components", { path: "v-button.vue", extensions: ["vue"] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/svg-sprite"],
  svgSprite: {
    elementClass: "icon icon-font",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
