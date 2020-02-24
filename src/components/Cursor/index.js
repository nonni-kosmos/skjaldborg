import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { useSelector } from "react-redux"

const grow = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const Ball = styled.div.attrs(({ top, left }) => ({
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
  animation: ${grow} 0.2s ease-in-out 0s forwards;
`

const Cursor = () => {
  const [{ x, y }, setCords] = useState({ x: 0, y: 0 })
  const redCursor = useSelector(state => state.reducer.redCursor)

  useEffect(() => {
    document.addEventListener("mousemove", e => {
      setCords({ x: e.pageX, y: e.pageY })
    })
    return () => {
      document.removeEventListener("mousemove", e => {
        setCords({ x: e.pageX, y: e.pageY })
      })
    }
  }, [])
  return redCursor === "show" ? <Ball left={x - 50} top={y - 50}></Ball> : null
}

export default Cursor
