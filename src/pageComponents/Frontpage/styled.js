import styled from "styled-components"
import { breakpoints } from "../../constants"

export const Container = styled.div``
export const SubmitBtnWrap = styled.div`
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 50vh;
    width: 100%;
  }
`
