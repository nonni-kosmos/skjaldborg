// components
import { Container, PageTitle } from "./styled"
import Movie from "./Movie"
// tech
import React from "react"
import { useGetAcceptedMovies } from "../../hooks/useFirestoreCollection"

const AcceptedMovies = () => {
  const { docs: submissions, isLoading } = useGetAcceptedMovies()
  return (
    <>
      <PageTitle className="titlar">Heimildamyndir</PageTitle>
      <Container>
        {isLoading ? (
          <p>Fetching submissions...</p>
        ) : (
          submissions.map((movie, index) => (
            <Movie key={index} movie={movie}></Movie>
          ))
        )}
      </Container>
    </>
  )
}

export default AcceptedMovies
