import styled from "styled-components"
import theme from "styled-theming"

// Theme configs
export const backgroundColor = theme("mode", {
  main: "white",
  staff: "white",
})

export const greenColor = theme("mode", {
  main: "#84DF7B",
  staff: "black",
})

export const redColor = theme("mode", {
  main: "#E64746",
  staff: "gray",
})

export const Container = styled.div`
  background: ${greenColor};
  box-sizing: border-box;
  padding: 2.5rem;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Loader = styled.div`
  opacity: ${props => (props.opacity ? 1 : 0)};
  transition: 1s;
`
export const Title = styled.h1``
export const Text = styled.p``
