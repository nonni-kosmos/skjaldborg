import React, { useState } from "react"
import { useSelector } from "react-redux"
import { formSchema } from "../../config"
import { InputBox } from "../../styled"

// A repeatable input type text box
const Adrir = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  const [count, setCount] = useState(1)
  const { adrir } = formSchema
  return (
    <>
      <p>{icelandic ? adrir.placeholder.is : adrir.placeholder.en}</p>

      <div>
        <InputBox></InputBox> <InputBox></InputBox>
      </div>
    </>
  )
}

export default Adrir
