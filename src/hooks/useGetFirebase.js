import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import { getFirebase } from "../service/firebase"
import { useEffect, useState } from "react"

const useGetFirebase = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [db, setDb] = useState({
    firestore: null,
    auth: null,
    storage: null,
    providers: {
      google: null,
    },
  })

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyAuth = import("firebase/auth")
    const lazyStorage = import("firebase/storage")

    Promise.all([lazyApp, lazyAuth, lazyStorage]).then(([firebase]) => {
      const fb = getFirebase(firebase)
      setDb({
        firestore: fb.firestore(),
        auth: fb.auth(),
        storage: fb.storage(),
        providers: {
          google: new fb.auth.GoogleAuthProvider(),
          // more providers go here...
        },
      })
    }).then(() => {
      setIsLoading(false)
    })
  }, [])

  return {
    db,
    isLoading,
  }
}

export default useGetFirebase
