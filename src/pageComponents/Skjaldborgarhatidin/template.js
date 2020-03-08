import React from "react"
import PageTitle from "../../reusableComponents/PageTitle"
import TopImage from "../../reusableComponents/TopImage"
import Content from "../../reusableComponents/Content"
import { Wrap } from "./styled"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"

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
        <Wrap>
          <PageTitle>{title}</PageTitle>
          <Content html={html}></Content>
        </Wrap>
        <p>I AM TO THE RIGHT</p>
      </div>
      {Component ? <Component></Component> : null}
      <Footer></Footer>
    </>
  )
}

export default Template
