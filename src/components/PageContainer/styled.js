import styled from "styled-components"
import theme from "styled-theming"

// Theme configs
export const backgroundColor = theme("mode", {
  main: "white",
  staff: "white",
})

export const greenColor = theme("mode", {
  main: " rgb(188,220,186)",
  staff: "black",
})

export const redColor = theme("mode", {
  main: `rgb(190, 69, 69)`,
  staff: "gray",
})

export const greenTextColor = theme("mode", {
  main: "#9DD79A",
  staff: "black",
})

export const Container = styled.div`
  background: ${backgroundColor};
  box-sizing: border-box;
`
export const Loader = styled.div`
  opacity: ${props => (props.opacity ? 1 : 0)};
  transition: 1s;
`
