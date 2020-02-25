import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

export const useGetSingleDoc = (colName, docId) => {
  const [isLoading, setIsLoading] = useState(true)
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      setIsLoading(false)
      const db = getFirebase(firebase).firestore()
      setDoc(db.collection(colName).doc(docId))
    })
  }, [colName, docId])
  return { isLoading, doc }
}
