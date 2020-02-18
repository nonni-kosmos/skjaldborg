import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

// Authentication hook
const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyAuth = import("firebase/auth")

    Promise.all([lazyApp, lazyAuth]).then(([firebase]) => {
      setAuth(getFirebase(firebase).auth())
      setIsLoading(false)
    })
  }, [])

  return {
    auth,
    isLoading,
  }
}

export default useAuth
