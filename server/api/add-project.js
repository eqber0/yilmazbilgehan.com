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

// Add a new project to the database
export async function addProject(projectData) {
  const db = getFirestore()

  try {
    // Add the data to the "projects" collection
    const docRef = await db.collection("projects").add(projectData)
    return docRef.id // Return the ID of the newly created document
  } catch (error) {
    console.error("Error adding project:", error)
    throw error
  }
}
