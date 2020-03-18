import React from "react"
import { Hint } from "../../styled"
import { ErrorMessage } from "react-hook-form"

const TextArea = ({ forwardedRef, item, icelandic, errors }) => {
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
      <ErrorMessage
        name={item.name}
        errors={errors}
        message={icelandic ? "Útfyllist" : "Required"}
      ></ErrorMessage>
    </>
  )
}

export default TextArea
