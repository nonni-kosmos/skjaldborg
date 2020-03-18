import React from "react"
import { InputBox, Warning } from "../../styled"
import { ErrorMessage } from "react-hook-form"

const Adstandendur = ({ forwardedRef, wip, item, icelandic, errors }) => {
  return !wip ? (
    <>
      <InputBox
        name={item.name}
        placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
        type={item.type}
        ref={forwardedRef}
      ></InputBox>
      <ErrorMessage
        message={icelandic ? "Útfyllist" : "Required"}
        name={item.name}
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
        message={icelandic ? "Útfyllist" : "Required"}
        name={item.name}
        errors={errors}
        as={<Warning></Warning>}
      ></ErrorMessage>
    </>
  ) : null
}

export default Adstandendur
