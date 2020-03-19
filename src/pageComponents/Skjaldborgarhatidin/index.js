import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Template from "./template"
import { useSelector } from "react-redux"

const Skjaldborgarhatidin = ({
  data: {
    markdownRemark: { html, id, frontmatter },
  },
}) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Template
      image={frontmatter.mynd}
      title={icelandic ? frontmatter.title : frontmatter.title_en}
      html={html}
      extraComponent={null}
      currentId={id}
    ></Template>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/skjaldborgarhátíðin/" }) {
          html
          id
          frontmatter {
            title
            title_en
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
