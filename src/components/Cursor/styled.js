import styled, { keyframes, css } from "styled-components"

const grow = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const Ball = styled.div.attrs(({ top, left }) => ({
  style: {
    top,
    left,
  },
}))`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background: rgba(221, 48, 48, 0.6);
  position: absolute;
  z-index: 10;
  pointer-events: none;
  transition: 150ms;
  /* animation: ${grow} 0.2s ease-in-out 0s forwards; */
  transform: scale(0);
  ${props =>
    props.show !== "hide" &&
    css`
      transform: scale(1);
      ${props =>
        props.size === `small` &&
        css`
          transform: scale(0.5);
        `}
    `}
`
