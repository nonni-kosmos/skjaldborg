import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const LogoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 5rem;
    max-width: 9rem;
    margin: 0 auto;
  }
`

const Top5 = ({ data: { topfive } }) => {
  return (
    <LogoWrap>
      {topfive.nodes.map(item => (
        <a
          rel="noopener noreferrer"
          href={item.frontmatter.sponsor_url}
          target="_blank"
        >
          <img
            alt={item.frontmatter.title}
            src={item.frontmatter.logo.publicURL}
          ></img>
        </a>
      ))}
    </LogoWrap>
  )
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
      }
    `}
    render={data => <Top5 data={data} {...props}></Top5>}
  ></StaticQuery>
)
