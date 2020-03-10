import styled, { css } from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  position: relative;
  overflow: hidden;
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
  /* ${props =>
    props.frontpage &&
    css`
      position: fixed !important;
    `} */
`

export const Video = styled.video`
  position: absolute;
  width: 100%;
`
