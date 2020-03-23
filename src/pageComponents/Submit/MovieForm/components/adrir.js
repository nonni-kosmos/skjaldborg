import React, { useState } from "react"
import { useSelector } from "react-redux"
import { formSchema } from "../../config"
import { InputBox } from "../../styled"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { ADD_ADRIR, RESET_ADRIR } from "../../../../state/action"
import { redColor, greenColor } from "../../../../layouts/PageContainer/styled"

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  padding: 1rem;
  box-sizing: border-box;
  margin: 1rem 0 1rem 1rem;
  border: 2px solid ${redColor};
  color: ${redColor};
  background: ${props => props.background};
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

const Input = ({ index, icelandic }) => {
  const [nafn, setNafn] = useState("")
  const [hlutverk, setHlutverk] = useState("")

  const dispatch = useDispatch()

  const [saved, setSaved] = useState(false)

  return (
    <InputWrap onChange={() => setSaved(false)}>
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
      <Button
        background={saved ? greenColor : "transparent"}
        onClick={e => {
          e.preventDefault()
          dispatch({
            type: ADD_ADRIR,
            annar: { [hlutverk]: nafn, id: index },
          })
          setSaved(true)
          console.log(saved)
        }}
      >
        {icelandic ? "Vista" : "Saved"}
      </Button>
    </InputWrap>
  )
}

// A repeatable input type text box
const Adrir = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)

  const [inputs, setInputs] = useState([])

  const { adrir } = formSchema

  const [others, setOthers] = useState([])

  const appendInput = () => {
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
