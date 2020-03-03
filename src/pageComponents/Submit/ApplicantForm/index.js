import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useGetCollection } from "../../../hooks/useGetCollection"
import { emailRegexPattern, defaultApplicantValues, errorMsg } from "../config"
import { InputBox, Warning } from "../styled"
import useGetAuth from "../../../hooks/useGetAuth"

const ApplicantForm = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: defaultApplicantValues,
  })

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { auth } = useGetAuth()

  const { collection } = useGetCollection("applicants")

  const onSubmit = data => {
    // anon register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        console.log("user sign up")
        // búa til appicant hér?
        collection
          .add({
            name: data.name,
            email: data.email,
            applicantId: u.user.uid,
          })
          .then(() => {
            console.log("Applicant saved")
          })
          .catch(error => {
            console.log("Applicant error: " + error)
          })
      })
      .catch(error => {
        if (error.code === "auth/email-already-in-use") {
          console.log("get em to login page")
        }
        console.log(error)
      })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="applicantsubmitform"
      action="POST"
    >
      <legend>Tengiliður verkefnis</legend>
      <InputBox
        placeholder="Fullt nafn"
        type="text"
        name="name"
        id="applicantName"
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.name && <Warning>{errorMsg}</Warning>}
      <InputBox
        email
        placeholder="Netfang"
        type="text"
        name="email"
        id="applicantEmail"
        ref={register({ required: true, pattern: emailRegexPattern })}
        onChange={e => setEmail(e.target.value)}
      />
      {errors.email && <Warning>Invalid email</Warning>}
      <InputBox
        type="password"
        name="password"
        id="applicantPassword"
        ref={register({ required: true, minLength: 6, maxLength: 20 })}
        onChange={e => setPassword(e.target.value)}
      ></InputBox>
      {errors.password && (
        <Warning>Password has to be at least 6 characters</Warning>
      )}
      <p style={{ color: "gray", fontSize: "0.8rem" }}>
        Tengiliður er skráður sjálfkrafa á póstlista Skjaldborgar.
      </p>
      <input
        name="submitFormBtn"
        className="submit-btn"
        type="submit"
        value="Búa til aðgang"
      />
    </form>
  )
}

export default ApplicantForm
