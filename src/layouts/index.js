import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { SET_DEVICE } from "../state/action"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const callBack = () => {
      dispatch({ type: SET_DEVICE, width: window.innerWidth })
    }
    window.addEventListener("resize", callBack)
    return () => {
      window.removeEventListener("resize", callBack)
    }
  }, [dispatch])
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default Layout
