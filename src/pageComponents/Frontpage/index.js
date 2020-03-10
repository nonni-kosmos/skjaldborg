import React from "react"
import { Container } from "./styled"
import BigBtn from "../../reusableComponents/BigBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../../reusableComponents/ExcerptBtns"
import Sponsors from "../../reusableComponents/Sponsors"

// import TopImage from "../../reusableComponents/TopImage"
import TopVideo from "../../reusableComponents/TopImage/video"

import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"

const Frontpage = ({ data: { imageSharp, video } }) => {
  return (
    <Container>
      <Header></Header>

      {/* <TopImage frontpage image={imageSharp}></TopImage> */}
      <TopVideo videoSource={video.publicURL}></TopVideo>

      <BigBtn text="Innsending mynda 2020" action="/umsokn"></BigBtn>

      <ExcerptBtns />

      <Sponsors></Sponsors>

      <Footer></Footer>
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
        video: file(name: { eq: "Forsida_skura" }) {
          publicURL
        }
      }
    `}
    render={data => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)
