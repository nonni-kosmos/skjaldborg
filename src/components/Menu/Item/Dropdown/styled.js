import styled from "styled-components"
import { greenColor, redColor } from "../../../PageContainer/styled"

export const Button = styled.div`
  text-decoration: none;
  font-size: 3rem;
  padding: 0.8rem;
  color: ${greenColor};
  &&:hover {
    color: white;
    cursor: default;
  }
`
export const List = styled.div`
  overflow: hidden;
  height: ${props => props.height};
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Item = styled.p`
  font-size: 1rem;
  color: ${redColor};
  margin: 0;
`
