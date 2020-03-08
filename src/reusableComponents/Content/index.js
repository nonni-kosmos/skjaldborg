import React from "react"
import { Container } from "./styled"
import FadeInSection from "../../techComponents/FadeInSection"

const Content = ({ html }) => {
  return <Container dangerouslySetInnerHTML={{ __html: html }}></Container>
}

export default Content
