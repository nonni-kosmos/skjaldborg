import React, { useState } from "react"
import SignIn from "./EmailPwLogin/signInForm"
import SignUp from "./EmailPwLogin/signUpForm"
import BigBtn from "../../../reusableComponents/BigBtn"

const ManualLogin = () => {
  const [registered, setRegistered] = useState(true)

  if (registered) {
    return (
      <>
        <SignIn></SignIn>
        <br></br>
        <BigBtn
          action={() => setRegistered(false)}
          button
          text={`Nýskráning`}
        ></BigBtn>
      </>
    )
  } else {
    return <SignUp></SignUp>
  }
}

export default ManualLogin
