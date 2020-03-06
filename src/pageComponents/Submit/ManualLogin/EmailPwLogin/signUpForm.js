import React from "react"
import { useForm } from "react-hook-form"
import { errorMsg } from "../../config"
import { InputBox, Warning } from "../../styled"
import styled from "styled-components"
import BigBtn from "../../../../reusableComponents/BigBtn"
import useGetFirebase from "../../../../hooks/useGetFirebase"

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

// Nýskráning
const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    name: "",
    email: "",
  })

  const {
    db: { auth },
  } = useGetFirebase()

  const onSubmit = data => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        result.user.updateProfile({
          displayName: data.name,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)} action="POST">
        <InputBox
          ref={register({ required: true })}
          placeholder="Name"
          type="name"
          name="name"
          id="applicant-name"
        ></InputBox>
        {errors.name && <Warning>{errorMsg}</Warning>}
        <InputBox
          ref={register({ required: true })}
          placeholder="Email"
          type="email"
          name="email"
          id="applicant-email"
        ></InputBox>
        {errors.name && <Warning>{errorMsg}</Warning>}
        <InputBox
          ref={register({ required: true })}
          placeholder="Password"
          type="password"
          name="password"
          id="applicant-password"
        ></InputBox>
        {errors.name && <Warning>{errorMsg}</Warning>}
        <BigBtn buttonSubmit text={`Búa til aðgang`}></BigBtn>
      </StyledForm>
    </>
  )
}

export default Form
