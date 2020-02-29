import React from "react"
import PageTitle from "../PageTitle"
import TopImage from "../TopImage"
import Content from "../Content"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "./styled"

const Skjaldborgarhatidin = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <PageTitle>Skjaldborgarhátíðin</PageTitle>
      <TopImage image={frontmatter.mynd}></TopImage>
      <Wrap>
        <p>list</p>
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
                fluid(quality: 95) {
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
