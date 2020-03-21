import styled from "styled-components"
import { redColor } from "../../layouts/PageContainer/styled"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  line-height: 138%;
  /* max-width: 35rem; */
  box-sizing: border-box;
  padding: 0 2rem;
  max-width: 40rem;
  * {
    font-family: les;
  }
  p {
    color: ${redColor};
    margin: 0.8rem 0 0.8rem 0;
  }
  blockquote > * {
    text-transform: uppercase;
  }
  blockquote {
    margin: 0;
  }
  blockquote > p {
    margin: 0;
  }
  h1 {
    text-transform: uppercase;
    color: ${redColor};
  }
  a {
    color: inherit;
  }
  strong {
    font-family: titlar;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;

    font-size: 1.4rem;
    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.5rem;
    }
  }
`
