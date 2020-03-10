import React from "react"
import { Container, Video } from "./styled"

export default ({ videoSource }) => {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src={videoSource}></source>
      </Video>
    </Container>
  )
}
