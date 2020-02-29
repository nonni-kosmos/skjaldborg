import React from "react"

import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import PageContainer from "../components/PageContainer"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  useSetPlatform()

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <SEO></SEO>
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default Layout
