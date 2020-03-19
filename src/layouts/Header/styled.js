import styled from "styled-components"
import { breakpoints } from "../../constants"

export const Wrap = styled.div`
  z-index: 4;
  height: 8.5rem;
  position: absolute;
`

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: none;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 10rem 30rem;
    grid-gap: 3rem;
  }
  div {
  }
  #box {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
