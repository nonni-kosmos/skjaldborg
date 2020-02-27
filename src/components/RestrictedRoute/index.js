import React, { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useGetCollection } from "../../hooks/useGetCollection"
import { navigate } from "gatsby"

const RestrictedRoute = ({ component: Component, redirectPath, isStaff }) => {
  const { isLoggedIn, isLoading, profile } = useAuth()
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
