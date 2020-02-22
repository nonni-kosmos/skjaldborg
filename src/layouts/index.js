import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { SET_PLATFORM, AUTHENTICATE } from "../state/action"
import useAuth from "../hooks/useAuth"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import PageContainer from "../components/PageContainer"

const Layout = ({ children, location }) => {
  const dispatch = useDispatch()

  // i) platform detection
  useEffect(() => {
    const callBack = () => {
      dispatch({ type: SET_PLATFORM, width: window.innerWidth })
    }
    window.addEventListener("resize", callBack)
    return () => {
      window.removeEventListener("resize", callBack)
    }
  }, [dispatch])

  const { isLoading, profile } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      console.log("authenticating:" + profile)
      dispatch({ type: AUTHENTICATE, profile: profile })
    }
  }, [isLoading, dispatch, profile])

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer pathname={location.pathname}>{children}</PageContainer>
    </>
  )
}

export default Layout
