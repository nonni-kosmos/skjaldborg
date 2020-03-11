import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import LogoSVG from "../../../static/assets/svg/logo.svg"

const breath = keyframes`
  0% {
    transform: scale(1)
  }
  25% {
    transform: scale(0.97)
  }
  50% {
    transform: scale(1.02)
  }
  75% {
    transform: scale(0.97)
  }
  100% {
    transform: scale(1)
  }
`
const beamGrow = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.97)
  }
  100% {
    transform: scale(1)
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
    transform-origin: 10% 50%;
    animation: ${breath} 4s ease-out 0.5s forwards infinite;
  }
  #beam {
    transform-origin: 20% 50%;
    animation: ${beamGrow} 2s ease-out 3s forwards infinite;
  }
`
