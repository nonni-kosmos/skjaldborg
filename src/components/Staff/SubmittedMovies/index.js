// components
import Content from "./Content"

// tech
import React, { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { navigate } from "gatsby"

const SubmittedMovies = () => {
  const { isLoggedIn, isLoading } = useAuth()
  const [authenticated, authenticate] = useState(undefined)

  useEffect(() => {
    if (!isLoading) authenticate(isLoggedIn)
  }, [isLoggedIn, isLoading])

  // has not determined
  if (authenticated === undefined) {
    return <p>checking credentials</p>
  } else if (!authenticated) {
    navigate("/staff")
    return null
  }

  return (
    // the page contents
    // submissions are in here
    <Content></Content>
  )
}

export default SubmittedMovies
