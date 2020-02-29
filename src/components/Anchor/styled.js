import styled from "styled-components"
import { Link } from "gatsby"
import { redColor, greenTextColor } from "../PageContainer/styled"

export const Container = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
  color: ${greenTextColor};
  text-transform: uppercase;
`
export const Ball = styled.span`
  height: 2.1rem;
  width: 2.1rem;
  position: absolute;
  top: -0.6rem;
  left: 3rem;
  background: ${redColor};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  opacity: 0;
`
