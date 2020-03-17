import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GuesthousesGrid } from "./styled"
import Guesthouse from "./Guesthouse"
import Fadeinsection from "../../../techComponents/FadeInSection"
import Ernir from "../../../reusableComponents/Ernir"

// Gistihúsin
const Gistihusin = ({ data: { guesthouses } }) => {
  return (
    <>
      <GuesthousesGrid>
        {guesthouses.nodes.map((guesthouse, index) => (
          <Fadeinsection
            key={index}
            effectType="slider"
            direction={"down"}
            intensity="20"
          >
            <Guesthouse guesthouse={guesthouse}></Guesthouse>
          </Fadeinsection>
        ))}
      </GuesthousesGrid>
      <Ernir></Ernir>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        guesthouses: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/gisting/" } }
          sort: { fields: frontmatter___title }
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
              heimasida
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
    render={data => <Gistihusin data={data} {...props}></Gistihusin>}
  ></StaticQuery>
)
