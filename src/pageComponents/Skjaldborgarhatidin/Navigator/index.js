import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const Anchor = styled(AniLink)``

const Navigator = ({ url }) => {
  return (
    <Anchor direction="right" to={url} cover bg="#BCDCBA">
      <h1>NÆSTA SÍÐA</h1>
    </Anchor>
  )
}

export default Navigator
