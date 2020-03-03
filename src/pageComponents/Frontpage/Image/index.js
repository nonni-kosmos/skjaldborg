import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, BackgroundImage, LogoImage, LogoContainer } from "./styled"

const Image = ({ data: { frontpage_image, logo } }) => {
  return (
    <Container>
      <BackgroundImage fluid={frontpage_image.fluid}></BackgroundImage>
      <LogoContainer>
        <LogoImage fluid={logo.fluid}></LogoImage>
      </LogoContainer>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        frontpage_image: imageSharp(
          fluid: { originalName: { eq: "cinema.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
        logo: imageSharp(
          fluid: { originalName: { eq: "skjaldborg_logo.png" } }
        ) {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    `}
    render={data => <Image data={data} {...props}></Image>}
  ></StaticQuery>
)
