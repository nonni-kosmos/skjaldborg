import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Template from "./template"
import { useSelector } from "react-redux"

const Skjaldborgarhatidin = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Template
      imageId="images/hatidin"
      title={icelandic ? frontmatter.title : frontmatter.title_en}
      html={html}
      extraComponent={null}
      order={frontmatter.order}
    ></Template>
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
            title_en
            order
            mynd {
              childImageSharp {
                fluid(maxHeight: 1200, quality: 65) {
                  ...GatsbyImageSharpFluid_noBase64
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
