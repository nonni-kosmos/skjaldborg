import styled from "styled-components"
import { redColor } from "../../layouts/PageContainer/styled"

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
`
