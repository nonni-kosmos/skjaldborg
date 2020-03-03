import React, { useEffect } from "react"
import ApplicantFrom from "../ApplicantForm"
import { Container } from "../styled"
import useAuth from "../../../hooks/useAuth"
import { navigate } from "gatsby"
import PageTitle from "../../../reusableComponents/PageTitle"

// applicant form
const Register = () => {
  const { isLoggedIn } = useAuth()

  // gets off page if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/umsokn/kvikmynd")
    }
  }, [isLoggedIn])
  return (
    <Container>
      <PageTitle nopad>Umsækjandi</PageTitle>
      <ApplicantFrom></ApplicantFrom>
    </Container>
  )
}

export default Register
