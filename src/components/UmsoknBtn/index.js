import React from "react"
import { Anchor, Text, Fill } from "./styled"

const Umsoknbtn = () => {
  return (
    <Text>
      <Anchor to="/umsokn">
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>Innsending mynda 2020</span>
      </Anchor>
    </Text>
  )
}

export default Umsoknbtn
