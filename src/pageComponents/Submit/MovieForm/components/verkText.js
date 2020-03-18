import React from "react"
import { InputBox, Warning } from "../../styled"
import { ErrorMessage } from "react-hook-form"

const VerkText = ({ forwardedRef, item, icelandic, wip, errors }) => {
  return !wip ? (
    <>
      <InputBox
        name={item.name}
        placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
        type={item.type}
        ref={forwardedRef}
      ></InputBox>
      <ErrorMessage
        name={item.name}
        message={icelandic ? "Útfyllist" : "Required"}
        errors={errors}
        as={<Warning></Warning>}
      ></ErrorMessage>
    </>
  ) : item.wip ? (
    <>
      <InputBox
        name={item.name}
        placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
        type={item.type}
        ref={forwardedRef}
      ></InputBox>
      <ErrorMessage
        name={item.name}
        message={icelandic ? "Útfyllist" : "Required"}
        errors={errors}
        as={<Warning></Warning>}
      ></ErrorMessage>
    </>
  ) : null
}

export default VerkText
