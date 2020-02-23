import React from "react"
import { Text, Anchor } from "./styled"
import { useDispatch } from "react-redux"
import { TRIGGER_MENU } from "../../../state/action"

const Item = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <Text>
      <Anchor
        partiallyActive={item.name === "Staff"}
        activeStyle={{ color: "white" }}
        onClick={() => dispatch({ type: TRIGGER_MENU, trigger: "closed" })}
        to={item.slug}
      >
        {item.name}
      </Anchor>
    </Text>
  )
}

export default Item
