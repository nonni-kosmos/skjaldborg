import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, GatsbyImage } from "./styled"

const Image = ({ data: { frontpage_image } }) => {
  return (
    <Container>
      <GatsbyImage fluid={frontpage_image.fluid}></GatsbyImage>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        frontpage_image: imageSharp(
          fluid: { originalName: { eq: "frontpage.jpeg" } }
        ) {
          fluid(quality: 100, maxWidth: 2600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => <Image data={data} {...props}></Image>}
  ></StaticQuery>
)
