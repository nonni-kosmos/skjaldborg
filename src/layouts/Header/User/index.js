import React, { useEffect, useState } from "react"
import Button from "../../../reusableComponents/Button"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { authState } from "rxfire/auth"

const User = () => {
  const [user, setUser] = useState(null)
  const { auth, isLoading } = useGetFirebase()

  useEffect(() => {
    if (!isLoading) {
      auth.onAuthStateChanged(u => {
        setUser(u)
      })
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
