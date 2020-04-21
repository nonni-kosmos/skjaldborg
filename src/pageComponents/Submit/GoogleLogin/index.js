import React, { useContext } from "react"
import BigBtn from "../../../reusableComponents/BigBtn"
import { RootContext } from "../../../context/main"

const GoogleLogin = () => {
  const {
    auth,
    providers: { google: provider },
  } = useContext(RootContext)

  const login = () => {
    auth.signInWithPopup(provider)
  }

  return <BigBtn text="Gmail" button action={() => login()}></BigBtn>
}

export default GoogleLogin
