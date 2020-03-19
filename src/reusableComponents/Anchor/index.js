import React from "react"
import { Container } from "./styled"
import { useSelector } from "react-redux"

const Anchor = ({ item, color }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container
      cover
      bg="#be4545"
      color={color}
      activeStyle={
        color === "red"
          ? { color: `rgb(188,220,186)` }
          : { color: `rgb(190, 69, 69)` }
      }
      to={item.slug}
    >
      {icelandic ? item.name : item.name_en}
    </Container>
  )
}

export default Anchor
