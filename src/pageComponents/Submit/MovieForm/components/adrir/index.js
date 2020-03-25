import React, { useState } from "react"
import { useSelector } from "react-redux"
import { formSchema } from "../../../config"
import { useDispatch } from "react-redux"
import { RESET_ADRIR } from "../../../../../state/action"

// components
import Input from "./input"
import { PlusWrap } from "./styled"
import { Hint } from "../../../styled"

// A repeatable input type text box
const Adrir = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)

  const [inputs, setInputs] = useState([])

  const { adrir } = formSchema

  const [others, setOthers] = useState([])

  const appendInput = e => {
    e.preventDefault()
    setInputs([
      ...inputs,
      <Input
        index={inputs.length}
        icelandic={icelandic}
        key={inputs.length}
      ></Input>,
    ])
    setOthers([...others, { nafn: "", hlutverk: "" }])
  }

  const dispatch = useDispatch()
  React.useEffect(() => {
    return () => dispatch({ type: RESET_ADRIR })
  }, [dispatch])

  return (
    <>
      <Hint>{icelandic ? adrir.hint.is : adrir.hint.en}</Hint>

      {inputs}

      <PlusWrap>
        <button onClick={e => appendInput(e)}>
          <span id="one"></span>
          <span id="two"></span>
        </button>
      </PlusWrap>
    </>
  )
}

export default Adrir
