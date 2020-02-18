import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { SET_DEVICE, AUTHENTICATE } from "../state/action"
import useAuth from "../hooks/useAuth"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  // i) platform detection
  useEffect(() => {
    const callBack = () => {
      dispatch({ type: SET_DEVICE, width: window.innerWidth })
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
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default Layout
