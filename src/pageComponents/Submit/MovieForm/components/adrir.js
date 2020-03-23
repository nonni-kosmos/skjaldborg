import React, { useState } from "react"
import { useSelector } from "react-redux"
import { formSchema } from "../../config"
import { InputBox } from "../../styled"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { ADD_ADRIR, RESET_ADRIR } from "../../../../state/action"

const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const PlusWrap = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 2rem;
    width: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:hover {
    cursor: pointer;
  }
  i {
    color: green;
  }
`

// A repeatable input type text box
const Adrir = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)

  const [inputs, setInputs] = useState([])

  const { adrir } = formSchema

  const [others, setOthers] = useState([])

  const appendInput = () => {
    setInputs([...inputs, <Input key={inputs.length}></Input>])
    setOthers([...others, { nafn: "", hlutverk: "" }])
  }

  const Input = () => {
    const [nafn, setNafn] = useState("")
    const [hlutverk, setHlutverk] = useState("")

    const dispatch = useDispatch()

    return (
      <InputWrap>
        <InputBox
          onChange={e => {
            setNafn(e.target.value)
          }}
          name={"nafn"}
          placeholder={icelandic ? "Nafn" : "Name"}
        ></InputBox>
        <InputBox
          onChange={e => setHlutverk(e.target.value)}
          name={"hlutverk"}
          placeholder={icelandic ? "Hlutverk" : "Role"}
        ></InputBox>
        <button
          onClick={e => {
            e.preventDefault()
            dispatch({ type: ADD_ADRIR, annar: { [hlutverk]: nafn } })
          }}
        >
          save!
        </button>
      </InputWrap>
    )
  }

  const dispatch = useDispatch()
  React.useEffect(() => {
    return () => dispatch({ type: RESET_ADRIR })
  }, [dispatch])

  return (
    <>
      <p>{icelandic ? adrir.placeholder.is : adrir.placeholder.en}</p>

      {inputs}

      <PlusWrap>
        <div role="button" onClick={() => appendInput()}>
          <i className="gg-math-plus"></i>
        </div>
      </PlusWrap>

      <link href="https://css.gg/math-plus.css" rel="stylesheet"></link>
    </>
  )
}

export default Adrir
