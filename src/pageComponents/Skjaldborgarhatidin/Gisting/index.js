import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GuesthousesGrid } from "./styled"
import Guesthouse from "./Guesthouse"
import Fadeinsection from "../../../techComponents/FadeInSection"
import Adili from "../../../reusableComponents/Adili"

// Gistihúsin
const Gistihusin = ({ data: { guesthouses, ernir, baldur } }) => {
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
      <Adili item={ernir}></Adili>
      <Adili item={baldur}></Adili>
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
        ernir: markdownRemark(
          fileAbsolutePath: { regex: "/flugfélagið-ernir.md/" }
        ) {
          html
          frontmatter {
            title
            title_en
            mynd {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        baldur: markdownRemark(fileAbsolutePath: { regex: "/baldur.md/" }) {
          html
          frontmatter {
            title
            title_en
            mynd {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Gistihusin data={data} {...props}></Gistihusin>}
  ></StaticQuery>
)
