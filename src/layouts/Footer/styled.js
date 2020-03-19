import styled from "styled-components"
import { redColor } from "../PageContainer/styled"
// import { breakpoints } from "../../constants"

export const Wrap = styled.div`
  background: ${redColor};
  width: 100%;
  height: 20rem;
  position: absolute;
  bottom: 0;
  z-index: 4;
  z-index: 8;
  /* display: none; */
`
export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10rem 25rem;
  grid-gap: 2rem;
  .mobile-sm-icon-wrap {
    height: 100%;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
