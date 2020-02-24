import styled from "styled-components"
import { greenColor, redColor } from "../../PageContainer/styled"

export const Container = styled.div`
  padding-top: 1.5rem;
  max-width: 9rem;
  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: ${greenColor};
  }
  p {
    margin: 0;
    color: ${redColor};
  }
`
