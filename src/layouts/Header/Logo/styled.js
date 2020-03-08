import styled from "styled-components"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled(AniLink)`
  height: 100%;
  width: 11rem;
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
