import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: -3.5rem;
  /** mobile */
  height: 50vh;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
    margin-bottom: 0;
  }
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
`

export const Video = styled.video`
  position: absolute;
  height: 100%;
  left: -30%;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
  }
`
