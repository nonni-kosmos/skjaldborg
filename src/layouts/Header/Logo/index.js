import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container } from "./styled"

const Logo = ({ data: { logo_colored }, footer }) => {
  return (
    <Container to="/">
      <img
        alt="logo"
        style={
          footer ? { filter: "grayscale(1) invert(1) contrast(5.5)" } : null
        }
        src={logo_colored.fluid.src}
      ></img>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        logo_colored: imageSharp(
          fluid: { originalName: { eq: "logo_colored.png" } }
        ) {
          fluid(maxHeight: 1000) {
            src
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props}></Logo>}
  ></StaticQuery>
)
