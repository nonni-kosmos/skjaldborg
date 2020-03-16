import styled from "styled-components"
import { redColor } from "../../../layouts/PageContainer/styled"

export const Box = styled.div`
  @import url("https://css.gg/check-o.css");
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1.5rem;
  position: relative;
  #check {
    color: green;
    position: absolute;
    right: 1rem;
    top: 4.2rem;
  }
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
