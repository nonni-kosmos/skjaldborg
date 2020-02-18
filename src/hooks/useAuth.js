import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

// Authentication hook
const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyAuth = import("firebase/auth")
    Promise.all([lazyApp, lazyAuth]).then(([firebase]) => {
      const auth = getFirebase(firebase).auth()

      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setProfile(user)
        } else {
          setProfile(null)
        }
        setIsLoading(false)
      })

      return () => {
        unsubscribe()
      }
    })
  }, [])

  return {
    isLoading,
    isLoggedIn: !!profile,
    profile,
  }
}

export default useAuth
