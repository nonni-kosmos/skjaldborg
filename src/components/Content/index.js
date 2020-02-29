import React from "react"
import { Container } from "./styled"

const Content = ({ html }) => {
  return <Container dangerouslySetInnerHTML={{ __html: html }}></Container>
}

export default Content
