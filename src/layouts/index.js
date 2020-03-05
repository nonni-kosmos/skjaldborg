import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AUTHENTICATE } from "../state/action"
import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"
import useGetFirebase from "../hooks/useGetFirebase"
import { authState } from "rxfire/auth"

/** components */
import { GlobalStyle } from "./GlobalStyle"
import PageContainer from "./PageContainer"
import SEO from "./seo"

const Layout = ({ children, location }) => {
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)

  useSetPlatform()

  const { auth, isLoading } = useGetFirebase()

  // useEffect(() => {
  //   if (!isLoading) {
  //     console.log("authenticating:" + user)
  //     authState(auth).subscribe(user => {
  //       setUser(user)
  //     })
  //     dispatch({ type: AUTHENTICATE, profile: user })
  //   }
  // }, [isLoading, dispatch, user])

  return (
    <>
      <SEO></SEO>
      <GlobalStyle></GlobalStyle>
      <PageContainer pathname={location.pathname}>{children}</PageContainer>
    </>
  )
}

export default Layout
