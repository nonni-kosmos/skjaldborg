import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Image } from "./styled"

const Logo = ({ data: { logo_colored } }) => {
  return (
    <Container to="/">
      <Image fluid={logo_colored.fluid}></Image>
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
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props}></Logo>}
  ></StaticQuery>
)
