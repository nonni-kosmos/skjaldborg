import React from "react"
import { Box, Title, Details, DirectorsName, Duration } from "./styled"
import { Image } from "cloudinary-react"

const Movie = ({ movie }) => {
  return (
    <Box>
      <Image
        cloudName={"dgekvli3k"}
        publicId="gatsby-cloudinary/test4_k9pwrk.jpg"
      ></Image>
      <Title>{movie.frontmatter.title}</Title>
      <Details>
        <DirectorsName className="les-texti">
          {movie.frontmatter.director}
        </DirectorsName>
        <Duration>{movie.frontmatter.duration} mín.</Duration>
      </Details>
    </Box>
  )
}

export default Movie
