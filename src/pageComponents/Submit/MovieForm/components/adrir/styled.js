import styled from "styled-components"
import { breakpoints } from "../../../../../constants"
import { redColor } from "../../../../../layouts/PageContainer/styled"

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-bottom: 1px solid gray;
  padding: 1rem 0 1rem 0;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    border: none;
    grid-gap: 10px;
  }
`
export const Button = styled.button`
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid ${redColor};
  color: ${redColor};
  background: ${props => props.background};

  margin: 1rem;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    margin: 1rem 0 1rem 1rem;
  }
`
export const PlusWrap = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: 2rem;
    width: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
  }
  button:hover {
    cursor: pointer;
  }
  i {
    color: green;
  }
`
