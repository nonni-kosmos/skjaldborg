import React from "react"
import PageTitle from "../../reusableComponents/PageTitle"
import TopImage from "../../reusableComponents/TopImage"
import Content from "../../reusableComponents/Content"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "./styled"
import Nav from "./components/Nav"

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
        <Content html={html}></Content>
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
