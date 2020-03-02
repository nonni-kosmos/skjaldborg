import styled from "styled-components"
import { greenColor } from "../../../PageContainer/styled"
import { Link } from "gatsby"

export const Button = styled.div`
  text-decoration: none;
  font-size: 3rem;
`
export const Title = styled.span`
  color: white;
  &&:hover {
    color: ${greenColor};
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
  margin: 0;
  &&:hover {
    cursor: pointer;
  }
`
export const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
`
