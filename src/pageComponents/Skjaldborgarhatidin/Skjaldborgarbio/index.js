import React from "react"
import PageTitle from "../../../reusableComponents/PageTitle"
import { graphql, StaticQuery } from "gatsby"
import TopImage from "../../../reusableComponents/TopImage"
import Content from "../../../reusableComponents/Content"
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
      <TopImage image={frontmatter.mynd.childImageSharp}></TopImage>
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
