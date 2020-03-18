import React from "react"
import useGetFirebase from "../../../../hooks/useGetFirebase"
import { useForm, ErrorMessage } from "react-hook-form"
import { applicantFormSchema } from "../../config"
import { useDispatch, useSelector } from "react-redux"

// components
import { Box } from "../styled"
import { InputBox, Warning } from "../../styled"
import BigBtn from "../../../../reusableComponents/BigBtn"
import { SAVE_APPLICANT } from "../../../../state/action"

const Applicant = ({ completePhaseOne }) => {
  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()

  const { errors, handleSubmit, register } = useForm()

  const icelandic = useSelector(state => state.reducer.icelandic)

  const dispatch = useDispatch()

  const onSubmit = data => {
    // Here we save the applicant info in redux store
    // And save into firebase IF user completes movie registration
    if (window.confirm("Confirm applicant")) {
      dispatch({
        type: SAVE_APPLICANT,
        applicant: {
          fulltnafn: data.fulltnafn,
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
          {applicantFormSchema.data.map((item, index) => (
            <>
              <InputBox
                key={index}
                name={item.name}
                type={item.type}
                ref={register(item.register)}
                placeholder={
                  icelandic ? item.placeholder.is : item.placeholder.en
                }
              ></InputBox>
              <ErrorMessage
                as={<Warning></Warning>}
                errors={errors}
                name={item.name}
                message={icelandic ? "Útfyllist" : "Required"}
              ></ErrorMessage>
            </>
          ))}
          <BigBtn buttonSubmit text="Vista tengilið"></BigBtn>
        </form>
      </>
    )
  } else return <p>loading applicant</p>
}

export default Applicant
