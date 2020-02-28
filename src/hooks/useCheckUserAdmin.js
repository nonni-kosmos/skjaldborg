import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"
import { firestore } from "firebase"

// Authentication hook
const useCheckUserAdmin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyAuth = import("firebase/auth")
    const lazyStore = import("firebase/firestore")

    Promise.all([lazyApp, lazyAuth, firestore]).then(([firebase]) => {
      getFirebase(firebase)
        .auth()
        .onAuthStateChanged(user => {
          if (
            user.email === "master@master.is" ||
            user.email === "minion@minion.is"
          ) {
            // check if admin
            setUser(user.email)
          }
        })

      setIsLoading(false)
    })
  }, [])

  return {
    user,
    isLoading,
  }
}

export default useCheckUserAdmin
