import styled from "styled-components"
import theme from "styled-theming"
// import { breakpoints } from "../../constants"

const backgroundColor = theme("mode", {
  main: "rgb(188,220,186)",
  staff: "#E5E5E5",
})

export const Wrap = styled.div`
  z-index: 4;
  height: 8.5rem;
  width: 100%;
  background: ${backgroundColor};
`

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10rem 25rem;
  grid-gap: 2rem;
  div {
  }
  #box {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
