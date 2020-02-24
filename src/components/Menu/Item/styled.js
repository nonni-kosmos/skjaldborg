import styled from "styled-components"
import { Link } from "gatsby"
import theme from "styled-theming"

const Color = theme("mode", {
  main: "#4CE33E",
  staff: "black",
})

export const Text = styled.h1`
  margin: 0;
  padding: 0.4rem;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  padding: 0.8rem;
  color: ${Color};
  &&:hover {
    color: white;
    cursor: default;
  }
`
