import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

export const useGetCollectionData = colName => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const db = getFirebase(firebase).firestore()
      let items = []

      const unsubscribe = db
        .collection(colName)
        .get()
        .then(querySnapshot => {
          setIsLoading(false)
          querySnapshot.forEach(
            doc => {
              items.push({
                id: doc.id,
                frontmatter: doc.data(),
              })
            },
            err => {
              setError(err)
            }
          )
          setDocs(items)
          return () => unsubscribe()
        })
    })
  }, [colName])

  return { docs, isLoading, error }
}

// filter movies by accepted
export const useGetAcceptedMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const { firestore } = getFirebase(firebase)
      const db = firestore
      let items = []
      const unsubscribe = db
        .collection("movies")
        .where("accepted", "==", true)
        .get()
        .then(querySnapshot => {
          setIsLoading(false)
          querySnapshot.forEach(
            doc => {
              items.push({
                id: doc.id,
                frontmatter: doc.data(),
              })
            },
            err => {
              setError(err)
            }
          )
          setDocs(items)
          return () => unsubscribe()
        })
    })
  }, [])

  return { docs, isLoading, error }
}
