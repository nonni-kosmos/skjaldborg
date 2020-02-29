import React from "react"
import PageTitle from "../../PageTitle"
import { graphql, StaticQuery } from "gatsby"
import TopImage from "../../TopImage"
import Content from "../../Content"
import { Wrap } from "../styled"
import Nav from "../components/Nav"

const Skjaldborgarbio = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <PageTitle>Skjaldborgarbíó</PageTitle>
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
        markdownRemark(fileAbsolutePath: { regex: "/skjaldborgarbíó/" }) {
          html
          frontmatter {
            title
            mynd {
              childImageSharp {
                fluid(quality: 95) {
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
