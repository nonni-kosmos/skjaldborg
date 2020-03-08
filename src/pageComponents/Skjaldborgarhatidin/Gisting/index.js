import React from "react"
import TopImage from "../../../reusableComponents/TopImage"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "../styled"
import Content from "../../../reusableComponents/Content"
import { GuesthousesGrid } from "./styled"
import Guesthouse from "./Guesthouse"
import Fadeinsection from "../../../techComponents/FadeInSection"
import Header from "../../../layouts/Header"

import PageTitle from "../../../reusableComponents/PageTitle"

// Gisting / Ferðalagið
const Gisting = ({
  data: {
    markdownRemark: { html, frontmatter },
    guesthouses,
  },
}) => {
  return (
    <>
      <Header></Header>
      <TopImage image={frontmatter.mynd.childImageSharp}></TopImage>
      <Wrap>
        <PageTitle>Gisting / Ferðalagið</PageTitle>
        <Content html={html}></Content>
      </Wrap>
      <GuesthousesGrid>
        {guesthouses.nodes.map((guesthouse, index) => (
          <Fadeinsection key={index} effectType="slider" direction={"up"}>
            <Guesthouse guesthouse={guesthouse}></Guesthouse>
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
