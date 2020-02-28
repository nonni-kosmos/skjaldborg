import React, { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { navigate } from "gatsby"

const RestrictedRoute = ({ component: Component, redirectPath }) => {
  const { isLoggedIn, isLoading } = useAuth()
  const [authenticated, authenticate] = useState(undefined)

  useEffect(() => {
    if (!isLoading) {
      authenticate(isLoggedIn)
    }
  }, [isLoggedIn, isLoading])

  // has not determined
  if (authenticated === undefined) {
    return <p>checking credentials</p>
  } else if (!authenticated) {
    navigate(redirectPath)
    return null
  }
  return <Component></Component>
}

export default RestrictedRoute
