import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Image } from "./styled"

const Logo = ({ data: { logo_black } }) => {
  return (
    <Container to="/">
      <Image fluid={logo_black.fluid}></Image>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        logo_black: imageSharp(
          fluid: { originalName: { eq: "logo_black.png" } }
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
