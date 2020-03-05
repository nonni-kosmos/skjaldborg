import React, { useEffect, useState } from "react"
import ApplicantFrom from "../ApplicantForm"
import { Container } from "../styled"
import { navigate } from "gatsby"
import PageTitle from "../../../reusableComponents/PageTitle"
import GoogleLogin from "../GoogleLogin"
import { authState } from "rxfire/auth"
import useGetFirebase from "../../../hooks/useGetFirebase"

// applicant form
const Register = () => {
  const [authenticated, authenticate] = useState(null)

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
      <PageTitle nopad>Umsækjandi</PageTitle>
      {/* <ApplicantFrom></ApplicantFrom> */}
      <GoogleLogin></GoogleLogin>
    </Container>
  )
}

export default Register
