/** tech */
import React, { useState, useEffect } from "react"
import useAuth from "../../../hooks/useAuth"
import useGetAuth from "../../../hooks/useGetAuth"
import { navigate } from "gatsby"

// TESTS!

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { auth } = useGetAuth()

  const { isLoading, isLoggedIn } = useAuth()

  // gets off page if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/staff/submitted-movies")
    }
  }, [isLoggedIn])

  const handleSubmit = e => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)
    })

    setEmail("")
    setPassword("")
  }

  return isLoading ? (
    <p>loading user data...</p>
  ) : (
    <>
      <h1>Log in</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Email
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="text"
          ></input>
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
          ></input>
        </label>
        <input type="submit" value="Log in"></input>
      </form>
    </>
  )
}

export default Login
