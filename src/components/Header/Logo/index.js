import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Image } from "./styled"

const Logo = ({ data: { logo_colored }, footer }) => {
  return (
    <Container to="/">
      <Image
        imgStyle={
          footer ? { filter: "grayscale(1) invert(1) contrast(5.5)" } : null
        }
        fluid={logo_colored.fluid}
      ></Image>
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
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props}></Logo>}
  ></StaticQuery>
)
