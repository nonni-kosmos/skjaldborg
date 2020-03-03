import React from "react"
import { Anchor, Text, Fill } from "./styled"

const BigBtn = ({ text, slug }) => {
  return (
    <Text>
      <Anchor to={slug}>
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Anchor>
    </Text>
  )
}

export default BigBtn
