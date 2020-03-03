import React from "react"
import { Container, Image } from "./styled"

const Topimage = ({ image, frontpage }) => {
  return (
    <Container frontpage={frontpage}>
      <Image frontpage={frontpage} fluid={image.fluid}></Image>{" "}
    </Container>
  )
}

export default Topimage
