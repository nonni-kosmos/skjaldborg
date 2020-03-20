import React from "react"

// components
import Top5 from "./top5"
import Info from "./info"
import { Box } from "./styled"

const Contact = () => {
  return (
    <Box>
      <div className="wrap">
        <Info></Info>
      </div>
      <div className="wrap">
        <Top5></Top5>
      </div>
    </Box>
  )
}

export default Contact
