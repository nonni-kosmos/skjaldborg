import styled from "styled-components"
import theme from "styled-theming"
import { breakpoints } from "../../constants"

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
    display: flex;
    justify-content: space-between;
    padding-right: 5rem;
    box-sizing: border-box;

    /** mobile */
    width: 95%;
    /** tablets */
    @media only screen and (min-width: ${breakpoints.tablet}) {
      max-width: 85%;
    }
    /** desktop */
    @media only screen and (min-width: ${breakpoints.desktop}) {
      width: 50%;
    }
  }
  #user-wrapper {
    position: absolute;
    right: 15rem;
    top: 0;
    opacity: 0.7;
  }
`
