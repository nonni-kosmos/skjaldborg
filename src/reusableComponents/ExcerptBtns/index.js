import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Box } from "./styled"
import Fadeinsection from "../../techComponents/FadeInSection"
import { useSelector } from "react-redux"
import { Image } from "cloudinary-react"

const ExcerptBtns = ({
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Fadeinsection direction="down" intensity="10">
      <Container>
        {dropdownpages.map((page, index) => (
          <Box cover bg="#be4545" to={page.slug} key={index}>
            <Image
              cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
              publicId={page.image}
              secure
            ></Image>
            <p>{icelandic ? page.name : page.name_en}</p>
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
              name_en
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
