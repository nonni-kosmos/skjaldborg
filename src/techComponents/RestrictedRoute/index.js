import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import useGetFirebase from "../../hooks/useGetFirebase"
import { authState } from "rxfire/auth"

const RestrictedRoute = ({ component: Component, redirectPath }) => {
  const [authenticated, authenticate] = useState(undefined)
  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()
  useEffect(() => {
    let subscription
    if (!isLoading) {
      subscription = authState(auth).subscribe(user => {
        // is null if logged out
        authenticate(user)
      })
      return () => subscription.unsubscribe()
    }
  }, [isLoading, auth])

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
