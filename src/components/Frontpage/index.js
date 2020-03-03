import React from "react"
import { Container } from "./styled"
import TopImage from "../TopImage"
import BigBtn from "../BigBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../ExcerptBtns"
import Sponsors from "../Sponsors"

const Frontpage = ({ data: { imageSharp } }) => {
  return (
    <Container>
      <TopImage frontpage image={imageSharp}></TopImage>

      <BigBtn text="Innsending mynda 2020" slug="/umsokn"></BigBtn>

      <ExcerptBtns />

      <Sponsors></Sponsors>

      <BigBtn slug="/" text="Skrá mig á póstlista"></BigBtn>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        imageSharp(fluid: { originalName: { eq: "cinema.jpg" } }) {
          fluid(
            maxHeight: 2000
            traceSVG: { color: "rgb(190, 69, 69)" }
            toFormat: JPG
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    `}
    render={data => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)
