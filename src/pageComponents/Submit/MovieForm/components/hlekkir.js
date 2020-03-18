import React from "react"
import { InputBox, Hint } from "../../styled"

const Hlekkir = ({ forwardedRef, item, icelandic, wip }) => {
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
        </>
      ) : item.wip ? (
        <InputBox
          placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
          type={item.type}
          name={item.name}
          ref={forwardedRef}
        ></InputBox>
      ) : null}
    </>
  )
}

export default Hlekkir
