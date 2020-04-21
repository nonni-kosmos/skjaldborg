import React from "react"
import SubmitMovie from "../pageComponents/Submit/SubmitMovie"
import Register from "../pageComponents/Submit/Register"
import Success from "../pageComponents/Submit/Success"
import { Router } from "@reach/router"
import RestrictedRoute from "../techComponents/RestrictedRoute"

const Umsokn = () => {
  // applicant & movie form
  return (
    <Router basepath="/umsokn">
      <Register path="/"></Register>
      <RestrictedRoute
        path="/kvikmynd"
        redirectPath="/umsokn"
        component={SubmitMovie}
      ></RestrictedRoute>
      <Success path="/vel-gert"></Success>
    </Router>
  )
}

export default Umsokn
