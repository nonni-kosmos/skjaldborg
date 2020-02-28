import React, { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { navigate } from "gatsby"

const RestrictedRouteStaff = ({ component: Component, redirectPath }) => {
  const { isLoggedIn, isLoading, profile } = useAuth()
  const [authenticated, authenticate] = useState(undefined)

  useEffect(() => {
    if (!isLoading) {
      if (profile) {
        if (profile.email === "master@master.is") {
          authenticate(isLoggedIn)
        }
      }
      authenticate(isLoggedIn)
    }
  }, [isLoggedIn, isLoading, profile])

  // has not determined
  if (authenticated === undefined) {
    return <p>checking credentials</p>
  } else if (!authenticated) {
    navigate(redirectPath)
    return null
  }
  return <Component></Component>
}

export default RestrictedRouteStaff
