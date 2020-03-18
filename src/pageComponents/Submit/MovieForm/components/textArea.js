import React from "react"
import { Hint } from "../../styled"

const TextArea = ({ forwardedRef, item, icelandic }) => {
  return (
    <>
      <Hint>{icelandic ? item.hint.is : item.hint.en}</Hint>
      <textarea
        placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
        name={item.name}
        cols={item.cols}
        rows={item.rows}
        ref={forwardedRef}
      ></textarea>
    </>
  )
}

export default TextArea
