// components
import Header from "../Header"
import Burger from "../Burger"
import Menu from "../Menu"

// tech
import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "styled-theming"

// Theme configs
const backgroundColor = theme("mode", {
  main: "white",
  staff: "white",
})

const Container = styled.div`
  background: ${backgroundColor};
  box-sizing: border-box;
`

const PageContainer = ({ children, pathname }) => {
  const [theme, setTheme] = useState("main")

  useEffect(() => {
    if (pathname.includes("/staff")) {
      setTheme("staff")
    } else {
      setTheme("main")
    }
  }, [pathname])
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Header></Header>
      <Burger></Burger>
      <Menu></Menu>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default PageContainer
