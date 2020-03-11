import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  overflow: hidden;

  /** mobile */
  height: 100vh;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
  }
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
`

export const Video = styled.video`
  position: absolute;
  left: -120%;
  height: 100%;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
  }
`
