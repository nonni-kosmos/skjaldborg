import React from "react"
import { Container, Image, Icon } from "./styled"
import { StaticQuery, graphql } from "gatsby"

const Sponsors = ({ data: { imageSharp: logo } }) => {
  let fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <Container>
      <h1>Styrktaraðilar</h1>
      <div className="sponsor-grid">
        {fakeArray.map((item, index) => (
          <Icon key={index}>
            <Image fluid={logo.fluid}></Image>
          </Icon>
        ))}
      </div>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        imageSharp(fluid: { originalName: { eq: "spons.png" } }) {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => <Sponsors data={data} {...props}></Sponsors>}
  ></StaticQuery>
)
