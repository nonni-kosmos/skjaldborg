import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCabQ7UMR7KkoLK8prihjDkTC6eXyx7NKE",
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: "skjaldborg-9c060",
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
}

let firebaseCache

export const getUiConfig = firebase => ({
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

export const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}
