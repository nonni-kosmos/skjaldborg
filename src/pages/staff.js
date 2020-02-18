// components
import SubmittedMovies from "../components/Staff/SubmittedMovies"
import Login from "../components/Staff/Login"

// tech
import React from "react"
import { Router } from "@reach/router"

const Staff = () => {
  return (
    <Router basepath="/staff">
      <Login path="/"></Login>
      <SubmittedMovies path="/submitted-movies"></SubmittedMovies>
    </Router>
  )
}

export default Staff
