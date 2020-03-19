import styled from "styled-components"

export const backgroundColor = "white"

export const greenColor = "rgb(188,220,186)"

export const redColor = "rgb(190, 69, 69)"

export const greenTextColor = "#9DD79A"

export const Container = styled.div`
  box-sizing: border-box;
  min-height: 85vh;
  margin-bottom: 20rem;
`
export const Loader = styled.div`
  opacity: ${props => (props.opacity ? 1 : 0)};
  transition: 1s;
`
