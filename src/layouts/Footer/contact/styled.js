import styled from "styled-components"
import { breakpoints } from "../../../constants"

export const Box = styled.div`
  grid-area: center;
  display: grid;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    grid-template-rows: 1fr 1fr;
  }
`
