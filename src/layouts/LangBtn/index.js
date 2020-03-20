import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_LANGUAGE } from "../../state/action"
import { Box, Text, Lang } from "./styled"

const LangBtn = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  const dispatch = useDispatch()
  const pathname = useSelector(state => state.reducer.pathname)
  return (
    <Box onClick={() => dispatch({ type: CHANGE_LANGUAGE })}>
      <Text umsokn={pathname.includes("/umsokn/")}>
        <Lang>{icelandic ? "English" : "Íslenska"}</Lang>
      </Text>
    </Box>
  )
}

export default LangBtn
