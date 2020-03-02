import React from "react"
import { Container } from "./styled"

const Anchor = ({ item, color }) => {
  return (
    <Container
      color={color}
      activeStyle={
        color === "red"
          ? { color: `rgb(188,220,186)` }
          : { color: `rgb(190, 69, 69)` }
      }
      to={item.slug}
    >
      {item.name}
    </Container>
  )
}

export default Anchor
