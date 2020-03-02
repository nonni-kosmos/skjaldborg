import React from "react"
import { Container } from "./styled"
import TopImage from "../TopImage"
import BigBtn from "../BigBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../ExcerptBtns"
import FadeInSection from "../FadeInSection"

const Frontpage = ({ data: { imageSharp } }) => {
  return (
    <Container>
      <TopImage image={imageSharp}></TopImage>
      <FadeInSection>
        <BigBtn text="Innsending mynda 2020" slug="/umsokn"></BigBtn>
      </FadeInSection>
      <FadeInSection>
        <ExcerptBtns />
        {/* sponsar */}
      </FadeInSection>

      <FadeInSection>
        <BigBtn slug="/" text="Skrá mig á póstlista"></BigBtn>
      </FadeInSection>
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
