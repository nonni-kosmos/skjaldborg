import React from "react"
import { InputBox } from "../../styled"

const VerkText = ({ forwardedRef, item, icelandic, wip }) => {
  return !wip ? (
    <InputBox
      name={item.name}
      placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
      type={item.type}
      ref={forwardedRef}
    ></InputBox>
  ) : item.wip ? (
    <InputBox
      name={item.name}
      placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
      type={item.type}
      ref={forwardedRef}
    ></InputBox>
  ) : null
}

export default VerkText
