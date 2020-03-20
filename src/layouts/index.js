import React from "react"
import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"

/** components */
import { GlobalStyle } from "./GlobalStyle"
import PageContainer from "./PageContainer"
import SEO from "./seo"

const Layout = ({ children, location }) => {
  React.useEffect(() => {
    let isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === "[object SafariRemoteNotification]"
      })(
        !window["safari"] ||
          (typeof safari !== "undefined" && safari.pushNotification)
      )
    console.log(isSafari)
  }, [])
  useSetPlatform()
  return (
    <>
      <SEO></SEO>
      <GlobalStyle></GlobalStyle>
      <PageContainer pathname={location.pathname}>{children}</PageContainer>
    </>
  )
}

export default Layout
