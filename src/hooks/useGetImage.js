import { useEffect, useState } from "react"
import "firebase/firestore"
import { getFirebase } from "../service/firebase"

// Authentication hook
export const useGetImage = imageLocation => {
  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyStorage = import("firebase/storage")

    Promise.all([lazyApp, lazyStorage]).then(([firebase]) => {
      const { storage } = getFirebase(firebase)
      setImage(
        storage
          .ref(imageLocation)
          .getDownloadURL()
          .then(url => {
            setImage(url)
            setIsLoading(false)
          })
          .catch(err => {
            console.log(err)
            setImage(null) // placeholder image
          })
      )
    })
  }, [imageLocation])

  return {
    image,
    isLoading,
  }
}
