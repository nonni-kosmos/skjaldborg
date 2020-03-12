import React from "react"
import PageTitle from "../../reusableComponents/PageTitle"
import Content from "../../reusableComponents/Content"
import { Wrap, Grid, Container } from "./styled"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import Fadeinsection from "../../techComponents/FadeInSection"
import Navigator from "./Navigator"

import TopImage from "../../reusableComponents/TopImage"
import TopVideo from "../../reusableComponents/TopImage/video"
import { useSelector } from "react-redux"

const getNextPageFromTitle = title => {
  if (title === "Skjaldborgarhátíðin")
    return { url: "/bio", name: "Skjaldborgarbíó" }
  else if (title === "Skjaldborgarbíó")
    return { url: "/gisting-ferdalagid", name: "Gisting / Ferðalagið" }
  else return { url: "/hatidin", name: "Skjaldborgarhátíðin" }
}

// extra component is optional
const Template = ({ image, video, title, html, extraComponent: Component }) => {
  const platform = useSelector(state => state.reducer.platform)
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

export default Template
