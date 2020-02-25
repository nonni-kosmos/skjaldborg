import styled from "styled-components"
import theme from "styled-theming"

const backgroundColor = theme("mode", {
  main: "white",
  staff: "#E5E5E5",
})

export const Container = styled.div`
  z-index: 4;
  height: 8.5rem;
  width: 100%;
  background: ${backgroundColor};
  position: relative;
  #header-text-wrapper {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-right: 5rem;
    box-sizing: border-box;
  }
  #user-wrapper {
    position: absolute;
    right: 15rem;
    top: 0;
    opacity: 0.7;
  }
`
