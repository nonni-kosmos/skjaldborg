import React from "react"
import PageTitle from "../../PageTitle"
import TopImage from "../../TopImage"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "../styled"
import Nav from "../components/Nav"
import Content from "../../Content"

// Gisting / Ferðalagið
const Gisting = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <PageTitle>Gisting / Ferðalagið</PageTitle>
      <TopImage image={frontmatter.mynd}></TopImage>
      <Wrap>
        <Nav></Nav>
        <Content html={html}></Content>
      </Wrap>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/gisting-ferðalagið/" }) {
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
    render={data => <Gisting data={data} {...props}></Gisting>}
  ></StaticQuery>
)
