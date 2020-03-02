import React from "react"
import PageTitle from "../../PageTitle"
import { graphql, StaticQuery } from "gatsby"
import TopImage from "../../TopImage"
import Content from "../../Content"
import { Wrap } from "../styled"
import Nav from "../components/Nav"
import Fadeinsection from "../../FadeInSection"

const Skjaldborgarbio = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <PageTitle>Skjaldborgarbíó</PageTitle>
      <TopImage image={frontmatter.mynd.childImageSharp}></TopImage>
      <Wrap>
        <Nav></Nav>
        <Fadeinsection>
          <Content html={html}></Content>
        </Fadeinsection>
      </Wrap>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/skjaldborgarbíó/" }) {
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
    render={data => <Skjaldborgarbio data={data} {...props}></Skjaldborgarbio>}
  ></StaticQuery>
)
