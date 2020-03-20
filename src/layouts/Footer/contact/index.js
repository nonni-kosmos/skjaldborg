import React from "react"

// components
import Top5 from "./top5"
import Info from "./info"
import { Box } from "./styled"
import { useSelector } from "react-redux"

const Contact = () => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Box>
      <div className="wrap">
        <Info></Info>
      </div>
      {platform !== "mobile" ? (
        <div className="wrap top5wrap">
          <Top5></Top5>
        </div>
      ) : null}
    </Box>
  )
}

export default Contact
