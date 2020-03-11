import React from "react"
import { Container, Video, LogoMobileWrap } from "./styled"
import { useSelector } from "react-redux"
import Logo from "../Logo"

export default ({ videoSource }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Container>
      <Video playsInline autoPlay muted loop>
        <source type="video/mp4" src={videoSource}></source>
      </Video>
      {platform === "mobile" ? (
        <LogoMobileWrap>
          <Logo></Logo>
        </LogoMobileWrap>
      ) : null}
    </Container>
  )
}
