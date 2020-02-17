import { useEffect, useState } from "react"
import { getFirebase } from "../service/firebase"

// Authentication hook
const useAuth = () => {
  const { auth } = getFirebase()

  const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    // returns null if no user is found
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
  }, [])

  return {
    isLoading,
    isLoggedIn: !!profile,
    profile,
  }
}

export default useAuth
