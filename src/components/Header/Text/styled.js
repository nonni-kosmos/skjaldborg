import styled, { css } from "styled-components"
import { redColor } from "../../PageContainer/styled"

export const Container = styled.div`
  padding-top: 1.5rem;
  max-width: 9rem;
  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: ${redColor};
    padding-bottom: 0.5rem;
    ${props =>
      props.color === "white" &&
      css`
        color: white;
      `}
  }
  p {
    font-family: les;
    margin: 0;
    color: ${redColor};
    ${props =>
      props.color === "white" &&
      css`
        color: white;
      `}
  }
`
