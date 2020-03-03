import React from "react"
import { Container } from "./styled"

const Text = ({ meta, about, footer }) => {
  return (
    <Container color={footer ? "white" : "red"}>
      {about ? (
        <>
          <h1 className="titlar">{meta.title}</h1>
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
