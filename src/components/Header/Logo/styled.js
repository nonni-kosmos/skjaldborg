import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Container = styled(Link)`
  height: 7.5rem;
  width: 7.5rem;
  box-sizing: border-box;
  padding: 1.5rem;
  &&:hover {
    cursor: pointer;
  }
`
export const Image = styled(Img)``
