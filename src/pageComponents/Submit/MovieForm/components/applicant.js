import React, { useContext } from "react"
import { useForm, ErrorMessage } from "react-hook-form"
import { applicantFormSchema } from "../../config"
import { useDispatch, useSelector } from "react-redux"

// components
import { Box } from "../styled"
import { InputBox, Warning } from "../../styled"
import BigBtn from "../../../../reusableComponents/BigBtn"
import { SAVE_APPLICANT } from "../../../../state/action"

import { RootContext } from "../../../../context/main"

const Applicant = ({ completePhaseOne }) => {

  const { auth } = useContext(RootContext)

  const { errors, handleSubmit, register } = useForm({
    defaultValues: {
      fulltnafn: "",
      simanumer: "",
      postlisti: true,
    },
  })

  const icelandic = useSelector(state => state.reducer.icelandic)

  const dispatch = useDispatch()

  const onSubmit = data => {
    // Here we save the applicant info in redux store
    // And save into firebase IF user completes movie registration
    if (window.confirm("Confirm applicant")) {
      dispatch({
        type: SAVE_APPLICANT,
        applicant: {
          userId: auth.currentUser.uid,
          netfang: auth.currentUser.email,
          ...data,
        },
      })
      completePhaseOne()
    }
  }

  if (auth.currentUser) {
    return (
      <>
        <Box>
          <legend>Tengiliður </legend>
          <p>{auth.currentUser.email}</p>
          <button onClick={() => auth.signOut()}>
            {" "}
            {icelandic ? "Breyta tengilið" : "Change contact"}
          </button>
        </Box>
        {/* applicant form */}
        <form onSubmit={handleSubmit(onSubmit)} name="applicant-form">
          {applicantFormSchema.data.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "checkbox" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    paddingBottom: "1rem",
                    maxWidth: "25rem",
                  }}
                >
                  <label style={{ paddingLeft: "1rem" }}>
                    {icelandic ? item.placeholder.is : item.placeholder.en}
                  </label>
                  <InputBox
                    key={index}
                    name={item.name}
                    type={item.type}
                    ref={register(item.register)}
                  ></InputBox>
                </div>
              ) : (
                  <InputBox
                    key={index}
                    name={item.name}
                    type={item.type}
                    ref={register(item.register)}
                    placeholder={
                      icelandic ? item.placeholder.is : item.placeholder.en
                    }
                  ></InputBox>
                )}

              <ErrorMessage
                as={<Warning></Warning>}
                errors={errors}
                name={item.name}
                message={icelandic ? "Útfyllist" : "Required"}
              ></ErrorMessage>
            </React.Fragment>
          ))}
          <BigBtn buttonSubmit text={icelandic ? "Áfram" : "Continue"}></BigBtn>
        </form>
      </>
    )
  } else return <p>loading applicant</p>
}

export default Applicant
