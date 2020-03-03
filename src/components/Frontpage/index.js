import React from "react"
import { Container } from "./styled"
import TopImage from "../TopImage"
import BigBtn from "../BigBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../ExcerptBtns"

const Frontpage = ({ data: { imageSharp } }) => {
  return (
    <Container>
      <TopImage frontpage image={imageSharp}></TopImage>

      <div id="wrappo" style={{ background: "white", position: "relative" }}>
        <BigBtn text="Innsending mynda 2020" slug="/umsokn"></BigBtn>

        <ExcerptBtns />
        {/* sponsar */}

        <BigBtn slug="/" text="Skrá mig á póstlista"></BigBtn>
      </div>
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
