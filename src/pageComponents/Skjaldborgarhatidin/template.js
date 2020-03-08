import React from "react"
import PageTitle from "../../reusableComponents/PageTitle"
import TopImage from "../../reusableComponents/TopImage"
import Content from "../../reusableComponents/Content"
import { Wrap } from "./styled"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import Fadeinsection from "../../techComponents/FadeInSection"
import Navigator from "./Navigator"

const getNextPageFromTitle = title => {
  if (title === "Skjaldborgarhátíðin")
    return { url: "/bio", name: "Skjaldborgarbíó" }
  else if (title === "Skjaldborgarbíó")
    return { url: "/gisting-ferdalagid", name: "Gisting / Ferðalagið" }
  else return { url: "/hatidin", name: "Skjaldborgarhátíðin" }
}

// extra component is optional
const Template = ({ image, title, html, extraComponent: Component }) => {
  return (
    <>
      <Header></Header>
      <TopImage image={image.childImageSharp}></TopImage>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr .5fr",
        }}
      >
        <Fadeinsection direction="left" intensity="20">
          <Wrap>
            <PageTitle>{title}</PageTitle>
            <Content html={html}></Content>
          </Wrap>
        </Fadeinsection>
        <Navigator next={getNextPageFromTitle(title)}></Navigator>
      </div>
      {Component ? <Component></Component> : null}
      <Footer></Footer>
    </>
  )
}

export default Template
