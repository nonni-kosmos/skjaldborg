import styled from "styled-components"
import { redColor } from "../PageContainer/styled"
// import { breakpoints } from "../../constants"

export const Container = styled.div`
  background: ${redColor};
  width: 100%;
  z-index: 4;
  height: 8.5rem;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10rem 25rem;
  grid-gap: 2rem;
`
