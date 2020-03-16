import React from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { useForm } from "react-hook-form"
import { errorMsg } from "../config"

// components
import { Box } from "./styled"
import { InputBox, Warning } from "../styled"
import BigBtn from "../../../reusableComponents/BigBtn"

const Applicant = ({ saveApplicant }) => {
  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()

  const { errors, handleSubmit, register } = useForm()

  const onSubmit = () => {
    saveApplicant()
  }

  if (!isLoading && auth.currentUser) {
    return (
      <>
        <Box>
          <legend>Tengiliður </legend>
          <p>{auth.currentUser.email}</p>
          <button onClick={() => auth.signOut()}>Breyta tengilið</button>
        </Box>
        {/* applicant form */}
        <form onSubmit={handleSubmit(onSubmit)} name="applicant-form">
          <InputBox
            ref={register({ required: true, maxLength: 80 })}
            placeholder="Fullt nafn"
            type="text"
            name="fulltnafn"
          />
          {errors.fulltnafn && <Warning>{errorMsg}</Warning>}
          <InputBox
            ref={register({ required: true, maxLength: 80 })}
            placeholder="Hlutverk"
            type="text"
            name="hlutverk"
          />
          {errors.hlutverk && <Warning>{errorMsg}</Warning>}
          <InputBox
            ref={register({ required: true, maxLength: 20 })}
            placeholder="Símanúmer"
            type="number"
            name="simanumer"
          />
          {errors.simanumer && <Warning>{errorMsg}</Warning>}
          <BigBtn buttonSubmit text={`Áfram`}></BigBtn>
        </form>
      </>
    )
  } else return <p>loading applicant</p>
}

export default Applicant
