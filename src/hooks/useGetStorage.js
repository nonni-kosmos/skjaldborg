import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

// Authentication hook
export const useGetStorage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [storage, setStorage] = useState(false)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyStorage = import("firebase/storage")

    Promise.all([lazyApp, lazyStorage]).then(([firebase]) => {
      setStorage(getFirebase(firebase).storage())
      setIsLoading(false)
    })
  }, [])

  return {
    storage,
    isLoading,
  }
}
