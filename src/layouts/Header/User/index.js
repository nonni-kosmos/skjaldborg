import React, { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import useGetAuth from "../../../hooks/useGetAuth"
import Button from "../../../reusableComponents/Button"

const User = () => {
  const [user, setUser] = useState(null)
  const { profile, isLoading } = useAuth()
  const { auth } = useGetAuth()
  useEffect(() => {
    setUser(profile)
  }, [profile])

  return !isLoading && user ? (
    <>
      <p style={{ fontSize: ".9rem" }}>
        Velkomin/n {profile ? profile.email : ""}
      </p>
      <Button text={"Log out"} onClick={() => auth.signOut()}></Button>
    </>
  ) : null
}

export default User
