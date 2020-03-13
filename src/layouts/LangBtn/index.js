import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_LANGUAGE } from "../../state/action"

import styled from "styled-components"

const Box = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 12.5rem;
  z-index: 8;
  &&:hover {
    cursor: pointer;
  }
`
const Text = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 1.1rem;
`
const Lang = styled.span`
  text-decoration: ${props => (props.selected ? "underline" : "none")};
`

const LangBtn = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  const dispatch = useDispatch()
  return (
    <Box onClick={() => dispatch({ type: CHANGE_LANGUAGE })}>
      <Text>
        <Lang selected={icelandic}>Ís</Lang>/
        <Lang selected={!icelandic}>Eng</Lang>
      </Text>
    </Box>
  )
}

export default LangBtn
