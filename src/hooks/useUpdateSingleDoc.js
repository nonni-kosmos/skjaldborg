import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

export const useUpdateSingleDoc = (colName, docId, payload) => {
  const [isLoading, setIsLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      setIsLoading(false)
      const db = getFirebase(firebase).firestore()
      const unsubscribe = db
        .collection(colName)
        .doc(docId)
        .update({
          payload,
        })
        .then(() => {
          setSuccess(true)
        })
        .catch(err => {
          setSuccess(false)
          setError(err)
        })

      return () => unsubscribe()
    })
  }, [colName, docId, payload])
  return { isLoading, success, error }
}
