import React, { useState } from "react"
import { Container, Ball } from "./styled"

const Anchor = ({ item }) => {
  const [active, setActive] = useState(false)
  return (
    <Container activeClassName="selected" to={item.slug}>
      <Ball></Ball>
      {item.name}
    </Container>
  )
}

export default Anchor
