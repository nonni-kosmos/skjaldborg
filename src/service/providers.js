import firebase from "./firebase"

// Google
export const googleProvider = () => {
  return new firebase.auth.GoogleAuthProvider()
}
