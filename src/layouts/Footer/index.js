import React from "react"
import { Container, Wrap } from "./styled"
import Logo from "../Header/Logo"
import Contact from "./contact"

const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Logo footer></Logo>
        <Contact></Contact>
      </Container>
    </Wrap>
  )
}

export default Footer
