import styled from "styled-components"
import { Link } from "gatsby"

export const Text = styled.h1``
export const Anchor = styled(Link)`
  text-decoration: none;
  font-size: 3.8rem;
  color: black;
  &&:hover {
    color: white;
  }
`