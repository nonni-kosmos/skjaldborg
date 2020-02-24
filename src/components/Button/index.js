import React from "react"
import styled from "styled-components"

const ButtonNeu = styled.button`
  box-shadow: 0.06rem 0.06rem 1px #939393, -0.06rem -0.06rem 1px #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  background: lightgray;
  color: black;
  transition: 0.2s;
  &&:hover {
    box-shadow: 0.06rem 0.06rem 3px #939393, -0.06rem -0.06rem 3px #ffffff;
  }
`

const Button = ({ text, onClick, type }) => {
  return (
    <ButtonNeu type={type} onClick={onClick}>
      {text}
    </ButtonNeu>
  )
}

export default Button
