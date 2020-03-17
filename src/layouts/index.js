import React from "react"
import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"

/** components */
import { GlobalStyle } from "./GlobalStyle"
import PageContainer from "./PageContainer"
import SEO from "./seo"
import { useSelector } from "react-redux"

const Layout = ({ children, location }) => {
  useSetPlatform()
  const applicant = useSelector(state => state.reducer.applicant)
  console.log(applicant)
  return (
    <>
      <SEO></SEO>
      <GlobalStyle></GlobalStyle>
      <PageContainer pathname={location.pathname}>{children}</PageContainer>
    </>
  )
}

export default Layout
