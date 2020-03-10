import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Template from "./template"

const Skjaldborgarbio = ({
  data: {
    markdownRemark: { html, frontmatter },
    video,
  },
}) => {
  return (
    <Template
      video={video.publicURL}
      title={frontmatter.title}
      html={html}
      extraComponent={null}
    ></Template>
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
          }
        }
        video: file(name: { eq: "Skjaldborgarbio" }) {
          publicURL
        }
      }
    `}
    render={data => <Skjaldborgarbio data={data} {...props}></Skjaldborgarbio>}
  ></StaticQuery>
)
