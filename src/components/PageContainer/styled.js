import styled from "styled-components"
import theme from "styled-theming"

// Theme configs
export const backgroundColor = theme("mode", {
  main: "white",
  staff: "white",
})

export const greenColor = theme("mode", {
  main: "#4CE33E",
  staff: "black",
})

export const redColor = theme("mode", {
  main: "#DD3030",
  staff: "gray",
})

export const Container = styled.div`
  background: ${backgroundColor};
  box-sizing: border-box;
`
export const Loader = styled.div`
  opacity: ${props => (props.opacity ? 1 : 0)};
  transition: 1s;
`
