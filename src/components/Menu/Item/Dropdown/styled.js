import styled from "styled-components"
import { redColor } from "../../../PageContainer/styled"
import { Link } from "gatsby"

export const Button = styled.div`
  text-decoration: none;
  font-size: 3rem;
  color: ${redColor};
`
export const Title = styled.span`
  &&:hover {
    color: white;
    cursor: pointer;
  }
`
export const List = styled.div`
  overflow: hidden;
  height: ${props => props.height};
  padding-top: ${props => props.padTop};
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 7.5rem;
`
export const Item = styled.p`
  font-size: 1rem;
  color: ${redColor};
  margin: 0;
  &&:hover {
    color: white;
    cursor: pointer;
  }
`
export const Anchor = styled(Link)`
  text-decoration: none;
  color: inherit;
`
