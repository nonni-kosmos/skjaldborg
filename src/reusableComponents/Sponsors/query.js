import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"

const SponsorsQuery = ({ vip, data }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    // both queries
    const { topfive, rest } = data
    if (vip) {
      setList(topfive.nodes)
    } else {
      setList(rest.nodes)
    }
  }, [vip, data])

  return list.map((item, index) => (
    <a
      key={index}
      href={item.frontmatter.sponsor_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt={item.frontmatter.title + "-logo"}
        src={item.frontmatter.logo.publicURL}
      ></img>
    </a>
  ))
}
export default props => (
  <StaticQuery
    query={graphql`
      {
        topfive: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/styrktaradilar_top5/" } }
        ) {
          nodes {
            frontmatter {
              title
              sponsor_url
              logo {
                publicURL
              }
            }
          }
        }
        rest: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/styrktaradilar_rest/" } }
        ) {
          nodes {
            frontmatter {
              title
              sponsor_url
              logo {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => <SponsorsQuery data={data} {...props}></SponsorsQuery>}
  ></StaticQuery>
)
