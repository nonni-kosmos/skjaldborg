import React from "react"
import { Container, LogoMobileWrap } from "./styled"
import { useSelector } from "react-redux"
import Logo from "../Logo"
import CloudinaryVideo from "./cloudinaryVideo"

export default ({ videoSource }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Container>
      <CloudinaryVideo publicId={videoSource}></CloudinaryVideo>
      {platform === "mobile" ? (
        <LogoMobileWrap>
          <Logo></Logo>
        </LogoMobileWrap>
      ) : null}
    </Container>
  )
}
