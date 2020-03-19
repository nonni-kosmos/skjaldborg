import React, { useState } from "react"
import { Hint, Warning } from "../../styled"
import { ErrorMessage } from "react-hook-form"

const TextArea = ({ forwardedRef, item, icelandic, errors }) => {
  const [charsLeft, setCharsLeft] = useState(item.maxLength)
  const [message, setMessage] = useState({ is: "Útfyllist", en: "Required" })

  const handleTyping = event => {
    let result = item.maxLength - event.target.value.length
    if (result >= 0) {
      if (result === 0) setMessage({ is: "Útfyllist", en: "Required" })
      setCharsLeft(result)
    } else if (result < 0) {
      setCharsLeft(0)
      setMessage({ is: "Ólöglegur stafafjöldi", en: "Illegal character count" })
    }
  }

  return (
    <>
      <Hint>
        {icelandic ? item.hint.is : item.hint.en} <br /> <br />
        {"Stafir eftir: " + charsLeft}
      </Hint>
      <textarea
        onChange={e => handleTyping(e)}
        placeholder={icelandic ? item.placeholder.is : item.placeholder.en}
        name={item.name}
        cols={item.cols}
        rows={item.rows}
        ref={forwardedRef}
      ></textarea>
      <ErrorMessage
        name={item.name}
        errors={errors}
        message={icelandic ? message.is : message.en}
        as={<Warning></Warning>}
      ></ErrorMessage>
    </>
  )
}

export default TextArea
