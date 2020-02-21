// components
import Header from "../Header"

// tech
import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "styled-theming"

// Theme configs
const backgroundColor = theme("mode", {
  main: "gold",
  staff: "white",
})

const Container = styled.div`
  background: ${backgroundColor};
  padding: 5rem;
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
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default PageContainer
