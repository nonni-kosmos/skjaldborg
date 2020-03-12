import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { greenColor } from "../../PageContainer/styled"
import { breakpoints } from "../../../constants"

export const Text = styled.h1`
  margin: 0;
  padding: 1rem;
`
export const Anchor = styled(AniLink)`
  text-decoration: none;
  font-size: 4rem;
  padding: 0rem;
  color: white;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    &&:hover {
      color: ${greenColor};
      cursor: pointer;
    }
  }
`
