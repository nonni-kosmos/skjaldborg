import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Template from "./template"
import { useSelector } from "react-redux"

const Skjaldborgarbio = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Template
      video={"videos/skjaldborgarbio_jfy2nu"}
      title={icelandic ? frontmatter.title : frontmatter.title_en}
      html={html}
      extraComponent={null}
      image={frontmatter.mynd}
      order={frontmatter.order}
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
            title_en
            order
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
