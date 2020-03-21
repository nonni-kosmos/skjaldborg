// components
import { Container } from "../styled"
import PageTitle from "../../../reusableComponents/PageTitle"
import MovieForm from "../MovieForm"
import Footer from "../../../layouts/Footer"

// tech
import React from "react"

const Submit = () => {
  return (
    <>
      <Container>
        <PageTitle className="titlar">Umsókn</PageTitle>
        <MovieForm></MovieForm>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Submit
