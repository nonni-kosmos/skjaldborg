import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../constants"
import { greenColor } from "../../layouts/PageContainer/styled"

export const Container = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: -3.5rem;
  /** mobile */
  height: 50vh;
  background: ${greenColor}; /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
    margin-bottom: 0;
    padding-top: 0;
  }
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
`

export const Video = styled.video`
  position: relative;
  height: 100%;
  margin-bottom: -1rem;
  margin-left: -7.5rem;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    width: 100%;
    height: auto;
    margin-bottom: 0;
    margin-left: 0;
  }
`
export const LogoMobileWrap = styled.div`
  position: absolute;
  top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: -6rem;
`
