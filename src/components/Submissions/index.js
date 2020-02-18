// components
import { Container, Loading } from "./Styled"
import Submission from "./Submission"
// tech
import React from "react"
import { useGetCollectionData } from "../../hooks/useFirestoreCollection"

const Submissions = () => {
  const submissions = useGetCollectionData("movies")

  return (
    <Container>
      {submissions[1] ? (
        <Loading>Fetching submissions...</Loading>
      ) : (
        submissions[0].map((movie, index) => (
          <Submission key={index} movie={movie}></Submission>
        ))
      )}
    </Container>
  )
}

export default Submissions
