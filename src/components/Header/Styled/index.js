import styled from "styled-components"
import theme from "styled-theming"

const backgroundColor = theme("mode", {
  main: "green",
  staff: "#E5E5E5",
})

export const Container = styled.div`
  height: 7.5rem;
  width: 100%;
  top: 0;
  left: 0;
  background: ${backgroundColor};
`
