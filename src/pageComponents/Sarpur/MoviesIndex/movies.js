import React, { useState, useEffect, useContext } from "react"
import { docData } from "rxfire/firestore"
import { Grid } from "../styled"
import Movie from "./movie"
import { RootContext } from "../../../context/main"

const Movies = ({ year }) => {
  const { firestore } = useContext(RootContext)

  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (firestore) {
      let docRef = firestore.collection("sarpur").doc(year)
      const subscription = docData(docRef).subscribe(yearData => {
        setMovies(yearData.movies)
      })

      return () => subscription.unsubscribe()
    }
  }, [firestore, year])

  if (!firestore) {
    return null
  } else {
    return (
      <Grid>
        {movies.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </Grid>
    )
  }
}

export default Movies
