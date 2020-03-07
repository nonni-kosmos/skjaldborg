import React from "react"
import { Container } from "./styled"
import Logo from "../Header/Logo"
import Contact from "./contact"

const Footer = () => {
  return (
    <Container>
      <Logo footer></Logo>
      <Contact></Contact>
    </Container>
  )
}

export default Footer
