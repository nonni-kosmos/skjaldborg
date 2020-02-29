import React from "react"
import { Router } from "@reach/router"
import Skjaldborgarhatidin from "../components/Skjaldborgarhatidin"
import Skjaldborgarbio from "../components/Skjaldborgarhatidin/Skjaldborgarbio"
import Gisting from "../components/Skjaldborgarhatidin/Gisting"

const Hatidin = () => {
  return (
    <Router basepath="/hatidin">
      <Skjaldborgarhatidin path="/"></Skjaldborgarhatidin>
      <Skjaldborgarbio path="/bio"></Skjaldborgarbio>
      <Gisting path="/gisting-ferdalag"></Gisting>
    </Router>
  )
}

export default Hatidin
