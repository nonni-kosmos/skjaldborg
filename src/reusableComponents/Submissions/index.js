// components
import { Container, Loading } from "./Styled"
import Submission from "./Submission"
// tech
import React, { useState, useEffect } from "react"
import { useGetCollectionData } from "../../hooks/useFirestoreCollection"

const Submissions = ({ noRestrict }) => {
  // this defaults to false since it only should be true on the backend
  const [showAll, setShowAll] = useState(false)

  const { docs: submissions, isLoading } = useGetCollectionData("movies")

  useEffect(() => {
    if (noRestrict) setShowAll(true)
  }, [noRestrict])

  return (
    <Container>
      {isLoading ? (
        <Loading>Fetching submissions...</Loading>
      ) : (
        submissions.map((movie, index) =>
          showAll ? (
            <Submission key={index} movie={movie}></Submission>
          ) : (
            <Submission
              key={index}
              movie={movie.frontmatter.accepted ? movie : null}
            ></Submission>
          )
        )
      )}
    </Container>
  )
}

export default Submissions
