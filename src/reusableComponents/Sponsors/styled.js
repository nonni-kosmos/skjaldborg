import styled from "styled-components"
import { greenColor } from "../../layouts/PageContainer/styled"
import Img from "gatsby-image"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  background: ${greenColor};
  padding: 3rem 3rem 7.5rem 3rem;
  position: relative;

  /** mobile */
  margin: 0;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    margin: 0 0 7.5rem 0;
  }

  h1 {
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
  }
  div.sponsor-grid-top5 {
    display: grid;
    @media only screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(5, 1fr);
    }

    grid-gap: 4rem;
    box-sizing: border-box;
    width: 100%;
    img {
      height: 8rem;
      max-width: 15rem;
      margin: 0 auto;
    }
    a {
      margin: 0 auto;
    }
  }
  div.sponsor-grid-rest {
    padding-top: 4rem;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    @media only screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(auto-fill, minmax(7.5rem, 7.5rem));
    }
    grid-gap: 4rem;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
    img {
      height: 100%;
      width: 100%;
      @media only screen and (min-width: ${breakpoints.desktop}) {
        max-width: 7rem;
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
    }
    a {
      margin: 0 auto;
    }
  }
`
export const Icon = styled.div`
  box-sizing: border-box;
`
export const Image = styled(Img)`
  height: 100%;
`
