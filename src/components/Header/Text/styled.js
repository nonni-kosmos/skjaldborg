import styled from "styled-components"
import theme from "styled-theming"

const HeadingColor = theme("mode", {
  main: "#9fe098",
  staff: "black",
})
const ParagraphColor = theme("mode", {
  main: "#b65252",
  staff: "gray",
})

export const Container = styled.div`
  padding-top: 1.5rem;
  max-width: 9rem;
  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: ${HeadingColor};
  }
  p {
    margin: 0;
    color: ${ParagraphColor};
  }
`
