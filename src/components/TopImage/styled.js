import styled, { css } from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  height: 35rem;
  ${props =>
    props.frontpage &&
    css`
      /** make the image fullscreen, relative to header height of 8.5rem */
      min-height: 100vh;
      margin-top: -8.5rem;
    `}
  width: 100%;
  padding: 0;
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
