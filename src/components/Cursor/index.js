import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Ball } from "./styled"

const Cursor = () => {
  const [{ x, y }, setCords] = useState({ x: 0, y: 0 })
  const redCursor = useSelector(state => state.reducer.redCursor)
  const redCursorSize = useSelector(state => state.reducer.redCursorSize)

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

  return (
    <Ball
      size={redCursorSize}
      show={redCursor}
      left={x - 50}
      top={y - 50}
    ></Ball>
  )
}

export default Cursor
