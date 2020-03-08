import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Box, FillerImage } from "./styled"
import Fadeinsection from "../../techComponents/FadeInSection"

const ExcerptBtns = ({
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  return (
    <Fadeinsection direction="down" intensity="10">
      <Container>
        {dropdownpages.map((page, index) => (
          <Box cover bg="#be4545" to={page.slug} key={index}>
            <FillerImage src={page.image}></FillerImage>
            <p>{page.name}</p>
          </Box>
        ))}
      </Container>
    </Fadeinsection>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            dropdownpages {
              name
              slug
              image
            }
          }
        }
      }
    `}
    render={data => <ExcerptBtns data={data} {...props} />}
  ></StaticQuery>
)
