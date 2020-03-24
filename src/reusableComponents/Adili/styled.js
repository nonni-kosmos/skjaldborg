import styled from "styled-components"
import { breakpoints } from "../../constants"
import Img from "gatsby-image"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem 0;

  .content-wrap {
    display: grid;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 1rem 5rem 3rem;
    .content-wrap {
      grid-template-columns: 1fr 1fr;
    }
  }
`
export const ImageContainer = styled.div`
  box-sizing: border-box;
  padding: 0 2rem 2rem;
`
export const Image = styled(Img)``
