// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Bilgehan Yılmaz Portfolio",
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
        },
      ],
    },
  },
  css: [
    "~/assets/sass/app.scss",
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "swiper/css",
  ],
  runtimeConfig: {
    // Private keys are only available on the server
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
  },

  modules: ["nuxt-swiper", "nuxt-icons", "@pinia/nuxt"],
})
