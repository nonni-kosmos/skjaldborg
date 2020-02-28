import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AUTHENTICATE } from "../state/action"
import useAuth from "../hooks/useAuth"
import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import PageContainer from "../components/PageContainer"

const Layout = ({ children, location }) => {
  const dispatch = useDispatch()

  useSetPlatform()

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default Layout
