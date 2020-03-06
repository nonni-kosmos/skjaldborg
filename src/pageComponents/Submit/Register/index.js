import React, { useEffect, useState } from "react"
import { Container } from "../styled"
import { navigate } from "gatsby"
import PageTitle from "../../../reusableComponents/PageTitle"
import GoogleLogin from "../GoogleLogin"
import EmailPwLogin from "../ManualLogin/EmailPwLogin"
import { authState } from "rxfire/auth"
import useGetFirebase from "../../../hooks/useGetFirebase"
import ManualLogin from "../ManualLogin"

// applicant form
const Register = () => {
  const [authenticated, authenticate] = useState(null)
  const [manualSignUp, setManualSignUp] = useState(false)

  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()

  useEffect(() => {
    if (!isLoading) {
      authState(auth).subscribe(user => {
        authenticate(user)
      })
    }
  })

  // gets off page if already logged in
  useEffect(() => {
    if (authenticated) {
      navigate("/umsokn/kvikmynd")
    }
  }, [authenticated])
  return (
    <Container>
      <PageTitle nopad>Tengiliður</PageTitle>
      <p style={{ color: "gray" }}>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested.
      </p>
      {manualSignUp ? (
        <ManualLogin></ManualLogin>
      ) : (
        <div className="login-options-wrap">
          <h3>Skráðu þig inn með:</h3>
          <GoogleLogin></GoogleLogin>
          <EmailPwLogin action={() => setManualSignUp(true)}></EmailPwLogin>
        </div>
      )}
    </Container>
  )
}

export default Register
