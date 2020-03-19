import React, { useState } from "react"
import SignIn from "./EmailPwLogin/signInForm"
import SignUp from "./EmailPwLogin/signUpForm"
import BigBtn from "../../../reusableComponents/BigBtn"
import { useSelector } from "react-redux"

const ManualLogin = () => {
  const [registered, setRegistered] = useState(true)
  const icelandic = useSelector(state => state.reducer.icelandic)
  if (registered) {
    return (
      <>
        <SignIn></SignIn>
        <br></br>
        <BigBtn
          action={() => setRegistered(false)}
          button
          text={icelandic ? "Nýskráning" : "Register"}
        ></BigBtn>
      </>
    )
  } else {
    return <SignUp></SignUp>
  }
}

export default ManualLogin
