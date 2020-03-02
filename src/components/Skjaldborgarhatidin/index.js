import React from "react"
import PageTitle from "../PageTitle"
import TopImage from "../TopImage"
import Content from "../Content"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "./styled"
import Nav from "./components/Nav"
import FadeInSection from "../FadeInSection"

const Skjaldborgarhatidin = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <PageTitle>Skjaldborgarhátíðin</PageTitle>
      <TopImage image={frontmatter.mynd.childImageSharp}></TopImage>
      <Wrap>
        <Nav></Nav>
        <FadeInSection>
          <Content html={html}></Content>
        </FadeInSection>
      </Wrap>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/skjaldborgarhátíðin/" }) {
          html
          frontmatter {
            title
            mynd {
              childImageSharp {
                fluid(maxHeight: 1200, quality: 85) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Skjaldborgarhatidin data={data} {...props}></Skjaldborgarhatidin>
    )}
  ></StaticQuery>
)
