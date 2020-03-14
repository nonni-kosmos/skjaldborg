import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Container, ImageContainer, Image } from "./styled"
import PageTitle from "../PageTitle"
import Content from "../Content"
import { useSelector } from "react-redux"

const Ernir = ({ data: { ernir } }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <PageTitle>
        {icelandic ? ernir.frontmatter.title : ernir.frontmatter.title_en}
      </PageTitle>
      <div className="content-wrap">
        <ImageContainer>
          <Image fluid={ernir.frontmatter.mynd.childImageSharp.fluid}></Image>
        </ImageContainer>
        <Content html={ernir.html}></Content>
      </div>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        ernir: markdownRemark(fileAbsolutePath: { regex: "/ernir/" }) {
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
    render={data => <Ernir data={data} {...props}></Ernir>}
  ></StaticQuery>
)
