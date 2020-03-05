import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

// Authentication hook
const useGetGoogleProvider = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [provider, setProvider] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyAuth = import("firebase/auth")

    Promise.all([lazyApp, lazyAuth]).then(([firebase]) => {
      const { firebase: fb } = getFirebase(firebase)
      let provider = new fb.auth.GoogleAuthProvider()
      setProvider(provider)
      setIsLoading(false)
    })
  }, [])

  return {
    provider,
    isLoading,
  }
}

export default useGetGoogleProvider
