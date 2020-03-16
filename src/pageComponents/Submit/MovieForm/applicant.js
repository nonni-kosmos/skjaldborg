import React from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { useForm } from "react-hook-form"
import { errorMsg } from "../config"
import { useDispatch } from "react-redux"

// components
import { Box } from "./styled"
import { InputBox, Warning } from "../styled"
import BigBtn from "../../../reusableComponents/BigBtn"
import { SAVE_APPLICANT } from "../../../state/action"

const Applicant = ({ completePhaseOne }) => {
  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()

  const { errors, handleSubmit, register } = useForm()

  const dispatch = useDispatch()

  const onSubmit = data => {
    // Here we save the applicant info in redux store
    // And save into firebase IF user completes movie registration
    if (window.confirm("Confirm applicant")) {
      dispatch({
        type: SAVE_APPLICANT,
        applicant: {
          fulltnafn: data.fulltnafn,
          hlutverk: data.hlutverk,
          simanumer: data.simanumer,
          userId: auth.currentUser.uid,
          netfang: auth.currentUser.email,
        },
      })
      completePhaseOne()
    }
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
            type="text"
            name="simanumer"
          />
          {errors.simanumer && <Warning>{errorMsg}</Warning>}
          <BigBtn buttonSubmit text="Vista tengilið"></BigBtn>
        </form>
      </>
    )
  } else return <p>loading applicant</p>
}

export default Applicant
