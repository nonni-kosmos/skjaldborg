import styled, { css } from "styled-components"

export const Container = styled.div`
  max-width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: white;
    ${props =>
      props.color === "white" &&
      css`
        color: white;
      `}
  }
  p {
    font-family: les;
    margin: 0;
    color: white;
    ${props =>
      props.color === "white" &&
      css`
        color: white;
      `}
  }
`
