import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

export const useGetCollection = colName => {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const db = getFirebase(firebase).firestore()

      setCollection(db.collection(colName))
    })
  }, [colName])

  return { collection }
}
