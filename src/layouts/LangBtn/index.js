import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_LANGUAGE } from "../../state/action"

import styled from "styled-components"
import { greenColor, redColor } from "../PageContainer/styled"

const Box = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 12.5rem;
  z-index: 8;
  background: ${greenColor};
  border: 1px solid ${redColor};
  width: 5rem;
  display: flex;
  justify-content: center;
  &&:hover {
    cursor: pointer;
  }
`
const Text = styled.p`
  color: ${redColor};
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
