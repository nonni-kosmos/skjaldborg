import React from "react"
import { Router } from "@reach/router"
import Skjaldborgarhatidin from "../components/Skjaldborgarhatidin"

const Hatidin = () => {
  return (
    <Router basepath="/hatidin">
      <Skjaldborgarhatidin path="/"></Skjaldborgarhatidin>
    </Router>
  )
}

export default Hatidin
