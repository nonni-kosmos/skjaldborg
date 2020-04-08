import React from "react"
import { Container } from "./styled"
import Logo from "./svg"

export default ({ footer }) => {
  return (
    <Container footer={footer ? "true" : "false"} to="/">
      <Logo></Logo>
    </Container>
  )
}
