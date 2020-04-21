import React, { useContext, useEffect, useState } from "react"
import SubmitMovie from "../pageComponents/Submit/SubmitMovie"
import Register from "../pageComponents/Submit/Register"
import { RootContext } from "../context/main"

const Umsokn = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const { currentUser } = useContext(RootContext)
  useEffect(() => {
    if (currentUser) {
      setLoggedIn(currentUser)
    }
    else setLoggedIn(false)
  }, [currentUser])

  if (loggedIn) {
    return <SubmitMovie></SubmitMovie>
  }
  else return <Register></Register>
}

export default Umsokn
