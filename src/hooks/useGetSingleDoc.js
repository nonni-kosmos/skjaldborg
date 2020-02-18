import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

export const useGetSingleDoc = (colName, docId) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [doc, setDoc] = useState(null)

  console.log(docId)
  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      setIsLoading(false)
      const db = getFirebase(firebase).firestore()
      const unsubscribe = db
        .collection(colName)
        .doc(docId)
        .get()
        .then(
          d => {
            setDoc(d.data())
          },
          err => {
            setError(err)
          }
        )

      return () => unsubscribe()
    })
  }, [colName, docId])
  return { isLoading, doc, error }
}
