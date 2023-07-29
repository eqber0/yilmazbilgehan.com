import { getFirestore } from "firebase-admin/firestore"
import { initializeApp, getApps, cert } from "firebase-admin/app"

const apps = getApps()

if (!apps.length) {
  initializeApp({
    credential: cert(
      "./yilmazbilgehan-7c443-firebase-adminsdk-a4wgu-6703266de4.json"
    ),
  })
}

export default async () => {
  const db = getFirestore()
  const projectsSnap = await db.collection("projects").get()
  const projectsData = projectsSnap.docs.map((doc) => {
    return {
      uuid: doc.id,
      ...doc.data(),
    }
  })

  return projectsData
}
