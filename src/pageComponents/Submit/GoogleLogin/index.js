import React from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import BigBtn from "../../../reusableComponents/BigBtn"

const GoogleLogin = () => {
  const {
    db: {
      auth,
      providers: { google: provider },
    },
  } = useGetFirebase()

  const login = () => {
    auth.signInWithPopup(provider)
  }

  return <BigBtn text="Gmail" button action={() => login()}></BigBtn>
}

export default GoogleLogin
