import styled from "styled-components"
import { redColor } from "../../../layouts/PageContainer/styled"

export const Box = styled.div`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1.5rem;
  button {
    background: transparent;
    border: ${redColor} 1px solid;
    margin: 0 auto 0 0;
    box-sizing: border-box;
    padding: 0.6rem;
    color: ${redColor};
    &&:hover {
      cursor: pointer;
    }
  }
`
