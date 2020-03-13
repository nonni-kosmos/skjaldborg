import styled from "styled-components"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 5rem;
  }
`
