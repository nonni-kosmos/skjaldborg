import React from "react"
import { Container, Logo } from "./styled"

export default ({ footer }) => {
  return (
    <Container footer={footer ? "true" : "false"} to="/">
      <Logo></Logo>
    </Container>
  )
}
