import React from "react"
import { Container } from "./styled"
import { StaticQuery, graphql } from "gatsby"
import FadeInSection from "../../techComponents/FadeInSection"

const Sponsors = ({
  data: {
    allMarkdownRemark: { topfive },
  },
}) => {
  return (
    <Container>
      <h1>Styrktaraðilar</h1>
      <FadeInSection intensity="10">
        <div className="sponsor-grid-top5">
          {topfive.map((item, index) => (
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
          ))}
        </div>
      </FadeInSection>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/styrktaradilar_top5/" } }
        ) {
          topfive: nodes {
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
    render={data => <Sponsors data={data} {...props}></Sponsors>}
  ></StaticQuery>
)
