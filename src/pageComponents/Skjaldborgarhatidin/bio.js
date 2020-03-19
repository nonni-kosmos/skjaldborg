import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Template from "./template"

const Skjaldborgarbio = ({
  data: {
    markdownRemark: { html, frontmatter, id },
  },
}) => {
  return (
    <Template
      video={frontmatter.video.publicURL}
      title={frontmatter.title}
      html={html}
      extraComponent={null}
      image={frontmatter.mynd}
      currentId={id}
    ></Template>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/skjaldborgarbíó/" }) {
          html
          id
          frontmatter {
            title
            video {
              publicURL
            }
            mynd {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
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
