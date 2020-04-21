import React, { useEffect, useState, useContext } from "react"
import { collectionData } from "rxfire/firestore"

// components
import { Grid } from "../styled"
import Year from "./year"
import { RootContext } from "../../../context/main"

const Years = () => {
  const { firestore } = useContext(RootContext)

  const [years, setYears] = useState([])

  useEffect(() => {
    if (firestore) {
      let subscription
      subscription = collectionData(
        firestore.collection("sarpur"),
        "id"
      ).subscribe(items => {
        setYears(items)
      })

      return () => subscription.unsubscribe()
    }
  }, [firestore])

  if (firestore) {
    return (
      <Grid>
        {years
          .slice(0)
          .reverse()
          .map((year, index) => (
            <Year key={index} year={year}></Year>
          ))}
      </Grid>
    )
  } else return null
}

export default Years
