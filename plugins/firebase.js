import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore"

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: runtimeConfig.apiKey,
    authDomain: runtimeConfig.authDomain,
    databaseURL: runtimeConfig.databaseURL,
    projectId: runtimeConfig.databaseURL,
    storageBucket: runtimeConfig.storageBucket,
    messagingSenderId: runtimeConfig.messagingSenderId,
    appId: runtimeConfig.appId,
    measurementId: runtimeConfig.measurementId,
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const projectColl = collection(db, "projects")
  const projectQuery = query(projectColl)
  const querySnapshot = await getDocs(projectQuery)
  const projects = []
  await querySnapshot.forEach((doc) => {
    projects.push(doc.data())
  })

  // console.log(projectDocSnap.data)

  nuxtApp.vueApp.provide("projects", projects)
  nuxtApp.provide("projects", projects)
})
