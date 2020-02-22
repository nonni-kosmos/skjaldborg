import React from "react"
import { Container, Line } from "./styled"
import { useSelector, useDispatch } from "react-redux"
import { triggerMenu } from "../../state/action"

// open burger menu
const dispatches = (dispatch, trigger) => {
  dispatch(triggerMenu(trigger))
}

const Burger = () => {
  const menu = useSelector(state => state.reducer.menu)
  const dispatch = useDispatch()
  return menu === "closed" ? (
    <Container onClick={() => dispatches(dispatch, "open")}>
      <Line one></Line>
      <Line two></Line>
      <Line three></Line>
    </Container>
  ) : (
    <Container onClick={() => dispatches(dispatch, "closed")}>
      <Line one ex></Line>
      <Line three ex></Line>
    </Container>
  )
}

export default Burger
