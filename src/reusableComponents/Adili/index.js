import React from "react"

import { Container, ImageContainer, Image } from "./styled"
import PageTitle from "../PageTitle"
import Content from "../Content"
import { useSelector } from "react-redux"

const Adili = ({ item }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <PageTitle>
        {icelandic ? item.frontmatter.title : item.frontmatter.title_en}
      </PageTitle>
      <div className="content-wrap">
        <ImageContainer>
          <Image fluid={item.frontmatter.mynd.childImageSharp.fluid}></Image>
        </ImageContainer>
        <Content html={item.html}></Content>
      </div>
    </Container>
  )
}

export default Adili
