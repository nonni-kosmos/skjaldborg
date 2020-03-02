import React from "react"
import { Container } from "./styled"
import TopImage from "../TopImage"
import UmsoknBtn from "../UmsoknBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../ExcerptBtns"

const Frontpage = ({ data: { imageSharp } }) => {
  return (
    <Container>
      <TopImage image={imageSharp}></TopImage>
      <UmsoknBtn></UmsoknBtn>
      <ExcerptBtns></ExcerptBtns>
      {/* sponsar */}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        imageSharp(fluid: { originalName: { eq: "cinema.jpg" } }) {
          fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)
