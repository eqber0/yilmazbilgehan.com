import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: "AIzaSyBjH14q0799lylSn_5cj1bhnjA7i7sCXe8",
    authDomain: "yilmazbilgehan-7c443.firebaseapp.com",
    databaseURL: "https://yilmazbilgehan-7c443-default-rtdb.firebaseio.com",
    projectId: "yilmazbilgehan-7c443",
    storageBucket: "yilmazbilgehan-7c443.appspot.com",
    messagingSenderId: "979495837599",
    appId: "1:979495837599:web:8877a697908c5c053227aa",
    measurementId: "G-213S54WXN0",
  }

  const app = initializeApp(firebaseConfig)

  const analytics = getAnalytics(app)
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  nuxtApp.vueApp.provide("auth", auth)
  nuxtApp.provide("auth", auth)

  nuxtApp.vueApp.provide("firestore", firestore)
  nuxtApp.provide("firestore", firestore)
})
