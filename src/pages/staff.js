// components
import SubmittedMovies from "../pageComponents/Staff/SubmittedMovies"
import Login from "../pageComponents/Staff/Login"
import RestrictedRoute from "../techComponents/RestrictedRoute"

// tech
import React from "react"
import { Router } from "@reach/router"

const Staff = () => {
  return (
    <Router basepath="/staff">
      <Login path="/"></Login>
      <RestrictedRoute
        isStaff
        component={SubmittedMovies}
        redirectPath="/staff"
        path="/submitted-movies"
      ></RestrictedRoute>
    </Router>
  )
}

export default Staff
