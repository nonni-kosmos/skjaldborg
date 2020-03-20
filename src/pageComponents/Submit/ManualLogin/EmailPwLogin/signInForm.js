import React from "react"
import { useForm } from "react-hook-form"
import { errorMsg } from "../../config"
import { InputBox, Warning } from "../../styled"
import styled from "styled-components"
import BigBtn from "../../../../reusableComponents/BigBtn"
import useGetFirebase from "../../../../hooks/useGetFirebase"
import { useSelector } from "react-redux"

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

// Innskráning
const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    email: "",
  })
  const {
    db: { auth },
  } = useGetFirebase()
  const onSubmit = (data, e) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log("success")
      })
      .catch(err => {
        if (err) {
          e.target.reset()
          alert("User not found...")
        }
      })
  }

  const icelandic = useSelector(state => state.reducer.icelandic)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} action="POST">
      <InputBox
        ref={register({ required: true })}
        placeholder={icelandic ? "Netfang" : "Email"}
        type="email"
        name="email"
        id="applicant-email"
      ></InputBox>
      {errors.name && <Warning>{errorMsg}</Warning>}
      <InputBox
        ref={register({ required: true })}
        placeholder={icelandic ? "Lykilorð" : "Password"}
        type="password"
        name="password"
        id="applicant-password"
      ></InputBox>
      {errors.name && <Warning>{errorMsg}</Warning>}
      <BigBtn buttonSubmit text={icelandic ? "Innskráning" : "Log in"}></BigBtn>
    </StyledForm>
  )
}

export default Form
