import styled, { css } from "styled-components"
import { redColor } from "../PageContainer/styled"

export default styled.h1`
  color: ${redColor};
  ${props =>
    !props.nopad &&
    css`
      padding: 2rem 0 2rem 10rem;
    `}
  text-transform: uppercase;
`
