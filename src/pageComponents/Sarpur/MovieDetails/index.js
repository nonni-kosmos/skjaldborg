import React, { useEffect, useState, useContext } from "react"
import { docData } from "rxfire/firestore"

// components
import Template from "../../../reusableComponents/SarpurTemplate"
import Content from "./content"
import { RootContext } from "../../../context/main"

const Details = ({ id, year }) => {
  const { firestore } = useContext(RootContext)

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    if (firestore) {
      let docRef = firestore.collection("sarpurMovies").doc(id)
      const subscription = docData(docRef).subscribe(data => {
        setMovie(data)
      })
      return () => subscription.unsubscribe()
    }
  }, [firestore, id])

  if (movie) {
    return (
      <Template
        link={"/sarpur/" + year}
        year={year}
        title={{ is: movie.title, en: movie.title }}
      >
        <Content movie={movie}></Content>
      </Template>
    )
  } else return null
}

export default Details
