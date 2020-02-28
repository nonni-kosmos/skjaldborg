// components
import Header from "../Header"
import Burger from "../Burger"
import Menu from "../Menu"
import { Loader, Container } from "./styled"
import Cursor from "../Cursor"

// tech
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"

const PageContainer = ({ children, pathname }) => {
  const [theme, setTheme] = useState("main")
  const platform = useSelector(state => state.reducer.platform)

  useEffect(() => {
    if (pathname.includes("/staff")) {
      setTheme("staff")
    } else {
      setTheme("main")
    }
  }, [pathname])

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Loader opacity={platform}>
        {/* <Cursor></Cursor> */}
        <Header></Header>
        <Burger></Burger>
        <Menu></Menu>
        <Container>{children}</Container>
      </Loader>
    </ThemeProvider>
  )
}

export default PageContainer
