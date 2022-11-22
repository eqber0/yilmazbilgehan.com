export default {
  loading: "~/components/preloader.vue",

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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
      },
    ],
  },
  ssr: true,

  server: {
    host: "0",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/sass/app.scss", "swiper/swiper-bundle.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/svg-sprite"],
  svgSprite: {
    elementClass: "icon icon-font",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBjH14q0799lylSn_5cj1bhnjA7i7sCXe8",
          authDomain: "yilmazbilgehan-7c443.firebaseapp.com",
          projectId: "yilmazbilgehan-7c443",
          storageBucket: "yilmazbilgehan-7c443.appspot.com",
          messagingSenderId: "979495837599",
          appId: "1:979495837599:web:8877a697908c5c053227aa",
          measurementId: "G-213S54WXN0",
        },
        services: {
          auth: false, // Just as example. Can be any other service.
          firestore: true,
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
