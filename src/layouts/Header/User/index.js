import React, { useEffect, useState, useContext } from "react"
import Button from "../../../reusableComponents/Button"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { RootContext } from "../../../context/main"

const User = () => {
  const [user, setUser] = useState(null)
  const { auth } = useContext(RootContext)

  useEffect(() => {
    let subscription
    if (!isLoading) {
      subscription = auth.onAuthStateChanged(u => {
        setUser(u)
      })
      return () => subscription.unsubsribe()
    }
  }, [isLoading, auth])

  return !isLoading && user ? (
    <>
      <p style={{ fontSize: ".9rem" }}>Velkomin/n {user ? user.email : ""}</p>
      <Button text={"Log out"} onClick={() => auth.signOut()}></Button>
    </>
  ) : null
}

export default User
