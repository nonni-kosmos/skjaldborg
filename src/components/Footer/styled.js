import styled from "styled-components"
import { redColor } from "../PageContainer/styled"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  background: ${redColor};
  width: 100%;
  z-index: 4;
  height: 8.5rem;
  position: relative;
  #header-text-wrapper {
    display: flex;
    justify-content: space-between;
    padding-right: 5rem;
    box-sizing: border-box;
    /** mobile */
    width: 95%;
    /** tablets */
    @media only screen and (min-width: ${breakpoints.tablet}) {
      max-width: 85%;
    }
    /** desktop */
    @media only screen and (min-width: ${breakpoints.desktop}) {
      width: 50%;
    }
  }
`
