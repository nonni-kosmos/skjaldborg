import styled from "styled-components"
import { redColor } from "../PageContainer/styled"

export const Container = styled.div`
  line-height: 135%;
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
    color ${redColor};
  }
`
