import React from "react"
import PageTitle from "../../PageTitle"
import TopImage from "../../TopImage"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "../styled"
import Nav from "../components/Nav"
import Content from "../../Content"
import { GuesthousesGrid } from "./styled"
import Guesthouse from "./Guesthouse"
import Fadeinsection from "../../FadeInSection"

// Gisting / Ferðalagið
const Gisting = ({
  data: {
    markdownRemark: { html, frontmatter },
    guesthouses,
  },
}) => {
  return (
    <>
      <PageTitle>Gisting / Ferðalagið</PageTitle>
      <TopImage image={frontmatter.mynd.childImageSharp}></TopImage>
      <Wrap>
        <Nav></Nav>
        <Fadeinsection>
          <Content html={html}></Content>
        </Fadeinsection>
      </Wrap>
      <GuesthousesGrid>
        {guesthouses.nodes.map((guesthouse, index) => (
          <Fadeinsection direction={"up"}>
            <Guesthouse key={index} guesthouse={guesthouse}></Guesthouse>
          </Fadeinsection>
        ))}
      </GuesthousesGrid>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/gisting-ferðalagið/" }) {
          html
          frontmatter {
            title
            mynd {
              childImageSharp {
                fluid(maxHeight: 1200, quality: 85) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        guesthouses: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/gisting/" } }
        ) {
          nodes {
            frontmatter {
              title
              mynd {
                childImageSharp {
                  fluid(quality: 95, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              google_maps_url
              stadsetning {
                baer
                heimilisfang
                simi
              }
            }
          }
        }
      }
    `}
    render={data => <Gisting data={data} {...props}></Gisting>}
  ></StaticQuery>
)
