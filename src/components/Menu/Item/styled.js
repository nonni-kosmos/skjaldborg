import styled from "styled-components"
import { Link } from "gatsby"
import theme from "styled-theming"

const Color = theme("mode", {
  main: "#4CE33E",
  staff: "black",
})

export const Text = styled.h1`
  margin: 1rem;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: ${Color};
  &&:hover {
    color: white;
    cursor: default;
  }
`
