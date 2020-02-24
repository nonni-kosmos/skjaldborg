import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const RedBall = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 10px;
  background: rgba(221, 48, 48, 0.6);
  position: absolute;
  z-index: 10;
  pointer-events: none;
  transition: 50ms;
`

const Ball = styled.div.attrs(({ top, left }) => ({
  style: {
    top,
    left,
  },
}))`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: rgba(221, 48, 48, 0.6);
  position: absolute;
  z-index: 10;
  pointer-events: none;
  transition: 150ms;
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
