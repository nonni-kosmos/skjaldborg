import styled from "styled-components"
import { Link } from "gatsby"
import { greenColor } from "../../PageContainer/styled"

export const Text = styled.h1`
  margin: 0;
  padding: 1rem;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  padding: 0.8rem;
  color: ${greenColor};
  &&:hover {
    color: white;
    cursor: default;
  }
`
