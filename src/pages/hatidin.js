import React from "react"
import { Router } from "@reach/router"
import Skjaldborgarhatidin from "../pageComponents/Skjaldborgarhatidin"
import Skjaldborgarbio from "../pageComponents/Skjaldborgarhatidin/Skjaldborgarbio"
import Gisting from "../pageComponents/Skjaldborgarhatidin/Gisting"

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
