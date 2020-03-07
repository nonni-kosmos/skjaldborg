import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { greenColor } from "../../PageContainer/styled"

export const Text = styled.h1`
  margin: 0;
  padding: 1rem;
`
export const Anchor = styled(AniLink)`
  text-decoration: none;
  font-size: 3rem;
  padding: 0rem;
  color: white;
  &&:hover {
    color: ${greenColor};
    cursor: pointer;
  }
`
