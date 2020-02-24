import React from "react"
import { Text, Anchor } from "./styled"
import { useDispatch } from "react-redux"
import { TRIGGER_MENU, TRIGGER_RED_CURSOR } from "../../../state/action"

const Item = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <Text>
      <Anchor
        onMouseOver={() =>
          dispatch({ type: TRIGGER_RED_CURSOR, trigger: "show" })
        }
        onMouseLeave={() =>
          dispatch({ type: TRIGGER_RED_CURSOR, trigger: "hidden" })
        }
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
