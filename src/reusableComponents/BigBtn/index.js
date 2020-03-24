import React from "react"
import { Anchor, Button, Text, Fill } from "./styled"
import { useSelector } from "react-redux"

const BigBtn = ({ button, buttonSubmit, text, action, white }) => {
  const postlisted = useSelector(state => state.reducer.postlisted)

  if (button) {
    return (
      <Button disabled={postlisted} white={white} onClick={action}>
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Button>
    )
  } else if (buttonSubmit) {
    return (
      <Button white={white} type="submit">
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Button>
    )
  } else {
    return (
      <Text>
        <Anchor white={white} to={action}>
          <Fill></Fill>
          <span style={{ zIndex: 1 }}>{text}</span>
        </Anchor>
      </Text>
    )
  }
}

export default BigBtn
