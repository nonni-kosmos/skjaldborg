import React from "react"
import { Container, Ball } from "./styled"

const Anchor = ({ item, color }) => {
  return (
    <Container color={color} activeClassName="selected" to={item.slug}>
      <Ball></Ball>
      {item.name}
    </Container>
  )
}

export default Anchor
