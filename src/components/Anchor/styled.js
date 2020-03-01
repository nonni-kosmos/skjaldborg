import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { redColor, greenTextColor } from "../PageContainer/styled"

export const Container = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
  color: ${greenTextColor};
  ${props =>
    props.color === "red" &&
    css`
      color: ${redColor};
    `}
  text-transform: uppercase;
  z-index: 1;
`
export const Ball = styled.span`
  height: 1.7rem;
  width: 1.7rem;
  position: absolute;
  top: -0.7rem;
  right: 3rem;
  background: ${redColor};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  opacity: 0.5;
  pointer-events: none;
  transform: scale(0);
  ${Container}:hover & {
    transform: scale(1);
  }
`
