import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Container = styled(Link)`
  height: 100%;
  width: 8.5rem;
  padding-left: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
    width: 100%;
  }
`
export const Image = styled(Img)`
  width: 100%;
`
