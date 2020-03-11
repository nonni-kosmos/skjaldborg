import React from "react"
import { Container, Image, LogoMobileWrap } from "./styled"
import Logo from "../Logo"
import { useSelector } from "react-redux"

const Topimage = ({ image, frontpage }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Container frontpage={frontpage}>
      <Image frontpage={frontpage} fluid={image.fluid}></Image>{" "}
      {platform === "mobile" ? (
        <LogoMobileWrap>
          <Logo></Logo>
        </LogoMobileWrap>
      ) : null}
    </Container>
  )
}

export default Topimage
