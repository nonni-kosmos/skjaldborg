import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { redColor } from "../../../layouts/PageContainer/styled"
import ArrowSvg from "../../../../static/assets/svg/arrow.svg"

const Anchor = styled(AniLink)`
  height: 20rem;
  width: 100%;
  text-align: center;
  color: inherit;
  text-decoration: none;
  padding: 1rem 0;
  color: ${redColor};
`

// 🚀
const Arrow = styled(ArrowSvg)``

const Navigator = ({ next: { url, name } }) => {
  return (
    <Anchor direction="right" to={url} cover bg="#BCDCBA">
      <h2 className="titlar">{name}</h2>
      <Arrow></Arrow>
    </Anchor>
  )
}

export default Navigator
