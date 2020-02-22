import React from "react"
import { Text, Anchor } from "./styled"

const Item = ({ item }) => {
  return (
    <Text>
      <Anchor to={item.slug}>{item.name}</Anchor>
    </Text>
  )
}

export default Item
