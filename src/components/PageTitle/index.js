import styled, { css } from "styled-components"
import { redColor } from "../PageContainer/styled"

export default styled.h1`
  color: ${redColor};
  ${props =>
    !props.nopad &&
    css`
      padding: 0 0 0 10rem;
    `}
  text-transform: uppercase;
`
