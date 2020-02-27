// components
import { Container, PageTitle } from "../styled"
import MovieForm from "../MovieForm"

// tech
import React from "react"

const Submit = () => {
  return (
    <Container>
      <PageTitle className="titlar">Umsókn</PageTitle>
      <MovieForm></MovieForm>
    </Container>
  )
}

export default Submit
