import React from "react"
import { Container } from "./styled"

const Text = ({ meta, about }) => {
  return (
    <Container>
      {about ? (
        <>
          <h1>{meta.title}</h1>
          <p>{meta.subtitle}</p>
        </>
      ) : (
        <>
          <h1>{meta.year}</h1>
          <p>{meta.period}</p>
          <p>{meta.location}</p>
        </>
      )}
    </Container>
  )
}

export default Text
