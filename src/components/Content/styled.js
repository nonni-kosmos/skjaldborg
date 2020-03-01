import styled from "styled-components"
import { redColor, greenTextColor } from "../PageContainer/styled"

export const Container = styled.div`
  line-height: 135%;
  p {
    color: ${redColor};
  }
  blockquote > * {
    color: ${greenTextColor};
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
