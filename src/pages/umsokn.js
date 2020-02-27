import React from "react"
import Submit from "../components/Submit"
import { Router } from "@reach/router"

const Umsokn = () => {
  // applicant & movie form
  return (
    <Router basepath="/umsokn">
      <Submit path="/"></Submit>
    </Router>
  )
}

export default Umsokn
