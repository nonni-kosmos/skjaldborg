import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  overflow: hidden;

  /** mobile */
  height: auto;
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
  position: relative;
  width: 100%;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
  }
`
