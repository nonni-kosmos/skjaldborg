import React from "react"
import { Container, Image } from "./styled"

const Topimage = ({ image }) => {
  return (
    <Container>
      <Image fluid={image.childImageSharp.fluid}></Image>{" "}
    </Container>
  )
}

export default Topimage
