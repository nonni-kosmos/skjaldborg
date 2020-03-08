import React from "react"
import PageTitle from "../../reusableComponents/PageTitle"
import TopImage from "../../reusableComponents/TopImage"
import Content from "../../reusableComponents/Content"
import { graphql, StaticQuery } from "gatsby"
import { Wrap } from "./styled"
import Footer from "../../layouts/Footer"
import FadeInSection from "../../techComponents/FadeInSection"
import Header from "../../layouts/Header"

const Skjaldborgarhatidin = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <>
      <Header></Header>
      <TopImage image={frontmatter.mynd.childImageSharp}></TopImage>
      <Wrap>
        <PageTitle>Skjaldborgarhátíðin</PageTitle>
        <Content html={html}></Content>
      </Wrap>
      <Footer></Footer>
    </>
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
            mynd {
              childImageSharp {
                fluid(maxHeight: 1200, quality: 85) {
                  ...GatsbyImageSharpFluid
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
