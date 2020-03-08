import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import LogoSVG from "../../../../static/assets/svg/logo.svg"

const ballMove = keyframes`
  from {
    transform: translateX(100%):
  }
  to {
    transform: translateX(0%);
  }
`

export const Container = styled(AniLink)`
  height: 100%;
  width: 11rem;
  padding-left: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`
export const Image = styled(Img)`
  width: 100%;
`
export const Logo = styled(LogoSVG)`
  height: 100%;
  #ball {
    transform: translateX(100%);
    animation: ${ballMove} 1s ease-out 0.5s forwards;
  }
`
