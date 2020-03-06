import React from "react"
import { Anchor, Button, Text, Fill } from "./styled"

const BigBtn = ({ button, buttonSubmit, text, action }) => {
  if (button) {
    return (
      <Button onClick={action}>
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Button>
    )
  } else if (buttonSubmit) {
    return (
      <Button type="submit">
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Button>
    )
  } else {
    return (
      <Text>
        <Anchor to={action}>
          <Fill></Fill>
          <span style={{ zIndex: 1 }}>{text}</span>
        </Anchor>
      </Text>
    )
  }
}

export default BigBtn
