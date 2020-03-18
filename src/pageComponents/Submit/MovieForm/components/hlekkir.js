import React from "react"
import { InputBox, Hint, Warning } from "../../styled"
import { ErrorMessage } from "react-hook-form"

const Hlekkir = ({ forwardedRef, item, icelandic, wip, errors }) => {
  return (
    <>
      {!wip ? (
        <>
          {item.hint ? (
            <Hint>{icelandic ? item.hint.is : item.hint.en}</Hint>
          ) : null}
          <InputBox
            placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
            type={item.type}
            name={item.name}
            ref={forwardedRef}
          ></InputBox>
          <ErrorMessage
            name={item.name}
            errors={errors}
            message={icelandic ? "Útfyllist" : "Required"}
            as={<Warning></Warning>}
          ></ErrorMessage>
        </>
      ) : item.wip ? (
        <>
          <InputBox
            placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
            type={item.type}
            name={item.name}
            ref={forwardedRef}
          ></InputBox>
          <ErrorMessage
            name={item.name}
            errors={errors}
            message={icelandic ? "Útfyllist" : "Required"}
            as={<Warning></Warning>}
          ></ErrorMessage>
        </>
      ) : null}
    </>
  )
}

export default Hlekkir
