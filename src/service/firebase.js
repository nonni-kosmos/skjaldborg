import "firebase/auth"
import "firebase/firestore"
import { config } from "./config"

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(config)
  firebaseInstance = firebase

  let auth = firebase.auth()
  let firestore = firebase.firestore()
  return { auth, firestore }
}
