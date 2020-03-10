import React from "react"
import { Container, Wrap } from "./styled"
import Logo from "../Header/Logo"
import Contact from "./contact"

import { useSelector } from "react-redux"

const Footer = () => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Wrap>
      <Container>
        {platform === "desktop" ? <Logo footer></Logo> : null}
        <Contact></Contact>
      </Container>
    </Wrap>
  )
}

export default Footer
