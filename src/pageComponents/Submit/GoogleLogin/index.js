import React from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"

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

  return <button onClick={() => login()}>Skráðu þig með Google</button>
}

export default GoogleLogin
