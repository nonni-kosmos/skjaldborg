import React from "react"
import { Text, Anchor } from "./styled"
import Dropdown from "./Dropdown"
import { useDispatch } from "react-redux"
import { TRIGGER_MENU } from "../../../state/action"

const Item = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <Text>
      {item.name === `Hátíðin` ? (
        <Dropdown>{item.name}</Dropdown>
      ) : (
        <Anchor
          className="titlar"
          partiallyActive={item.name === "Staff"}
          activeStyle={{ color: "white" }}
          onClick={() =>
            dispatch({
              type: TRIGGER_MENU,
              trigger: `closed`,
            })
          }
          to={item.slug}
        >
          {item.name}
        </Anchor>
      )}
    </Text>
  )
}

export default Item
