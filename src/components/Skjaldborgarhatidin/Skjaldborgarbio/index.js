import React from "react"
import PageTitle from "../../PageTitle"
import { graphql, StaticQuery } from "gatsby"
import TopImage from "../../TopImage"

const Skjaldborgarbio = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <PageTitle>Skjaldborgarbíó</PageTitle>
      <TopImage image={frontmatter.mynd}></TopImage>
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
