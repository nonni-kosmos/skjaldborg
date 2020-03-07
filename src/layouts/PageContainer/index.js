// components
import Header from "../Header"
import Burger from "../Burger"
import Menu from "../Menu"
import Footer from "../Footer"
import { Loader, Container } from "./styled"

// tech
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"

const PageContainer = ({ children, pathname }) => {
  const [theme, setTheme] = useState("main")
  const platform = useSelector(state => state.reducer.platform)

  useEffect(() => {
    setTheme("main")
  }, [pathname])

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Loader opacity={platform}>
        <div style={{ background: "white" }} className="page-wrap">
          {/* <Header></Header> */}
          <Burger></Burger>
          <Menu></Menu>
          <Container>{children}</Container>
          {/* <Footer></Footer> */}
        </div>
      </Loader>
    </ThemeProvider>
  )
}

export default PageContainer
