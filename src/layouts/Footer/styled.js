import styled from "styled-components"
import { redColor } from "../PageContainer/styled"
import { breakpoints } from "../../constants"

export const Wrap = styled.div`
  background: ${redColor};
  width: 100%;
  height: 22rem;
  position: absolute;
  bottom: 0;
  z-index: 4;
`
export const Container = styled.div`
  height: 100%;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "left center right";
  }
`
