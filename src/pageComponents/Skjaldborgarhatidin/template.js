import React from "react"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

import PageTitle from "../../reusableComponents/PageTitle"
import Content from "../../reusableComponents/Content"
import { Wrap, Grid, Container } from "./styled"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import Fadeinsection from "../../techComponents/FadeInSection"
import Navigator from "./Navigator"
import TopImage from "../../reusableComponents/TopImage"
import TopVideo from "../../reusableComponents/TopImage/video"

const getNextPageFromTitle = title => {
  if (title === "Hátíðin") return { url: "/bio", name: "Skjaldborgarbíó" }
  else if (title === "Skjaldborgarbíó")
    return { url: "/ferdalagid-gisting", name: "Ferðalagið / Gisting" }
  else return { url: "/hatidin", name: "Skjaldborgarhátíðin" }
}

const getNextPageFromId = (pages, currentId) => {
  console.log(pages)
}

// extra component is optional
const Template = ({
  image,
  video,
  title,
  currentId,
  html,
  extraComponent: Component,
  data: {
    allMarkdownRemark: { pages },
  },
}) => {
  const platform = useSelector(state => state.reducer.platform)
  getNextPageFromId(pages, currentId)
  return (
    <Container>
      <Header></Header>
      {video ? (
        platform === "mobile" ? (
          <TopImage image={image.childImageSharp}></TopImage>
        ) : (
          <TopVideo videoSource={video}></TopVideo>
        )
      ) : (
        <TopImage image={image.childImageSharp}></TopImage>
      )}
      <Grid>
        <Fadeinsection direction="left" intensity="20">
          <Wrap>
            <PageTitle>{title}</PageTitle>
            <Content html={html}></Content>
          </Wrap>
        </Fadeinsection>
        {platform === "desktop" ? (
          <Navigator next={getNextPageFromTitle(title)}></Navigator>
        ) : null}
      </Grid>
      {Component ? <Component></Component> : null}
      {platform === "mobile" ? (
        <Navigator next={getNextPageFromTitle(title)}></Navigator>
      ) : null}
      <Footer></Footer>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/hatidin-undirsidur/" } }
        ) {
          pages: nodes {
            id
            frontmatter {
              title
            }
          }
        }
      }
    `}
    render={data => <Template data={data} {...props}></Template>}
  ></StaticQuery>
)
