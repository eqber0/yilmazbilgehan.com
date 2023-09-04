import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, query } from "firebase/firestore"

export default defineNuxtPlugin(async (nuxtApp) => {
  // const runtimeConfig = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const projectColl = collection(db, "projects")
  const projectQuery = query(projectColl)
  const querySnapshot = await getDocs(projectQuery)
  const projects = []
  querySnapshot.forEach((doc) => {
    projects.push(doc.data())
  })

  nuxtApp.vueApp.provide("projects", projects)
  nuxtApp.provide("projects", projects)
})
