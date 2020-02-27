import React from "react"
import SubmitMovie from "../components/Submit/SubmitMovie"
import Register from "../components/Submit/Register"
import { Router } from "@reach/router"
import RestrictedRoute from "../components/RestrictedRoute"

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
    </Router>
  )
}

export default Umsokn
