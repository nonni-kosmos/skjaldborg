import styled, { css } from "styled-components"
import { redColor } from "../PageContainer/styled"

export const Box = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 12.5rem;
  z-index: 8;
  width: 5rem;
  display: flex;
  justify-content: center;
  &&:hover {
    cursor: pointer;
  }
`
export const Text = styled.p`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-family: les;
  color: white;
  ${props =>
    props.umsokn &&
    css`
      color: ${redColor};
    `}
`
export const Lang = styled.span`
  text-decoration: ${props => (props.selected ? "underline" : "none")};
`
