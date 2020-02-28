// components
import { Loader, Container } from "./styled"

// tech
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"

const PageContainer = ({ children, pathname }) => {
  const [theme, setTheme] = useState("main")
  const platform = useSelector(state => state.reducer.platform)

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Loader opacity={platform}>
        <Container>{children}</Container>
      </Loader>
    </ThemeProvider>
  )
}

export default PageContainer
