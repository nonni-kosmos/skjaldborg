import { useEffect, useState } from "react"
import { getFirebase } from "../service/firebase"
import firebase from "firebase/app"

// gets collection by it's name
const useFirestoreCollection = colName => {
  const { firestore } = getFirebase(firebase)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsubscribe = firestore()
      .collection(colName)
      .onSnapshot(
        querySnapshop => {
          setIsLoading(false)
          setDocs(
            querySnapshop.docs.map(doc => ({
              _id: doc.id,
              ...doc.data(),
            }))
          )
        },
        err => {
          setError(err)
        }
      )
    return () => unsubscribe()
  }, [colName])
  return [docs, isLoading, error]
}

export default useFirestoreCollection
