import React from "react"
import { Box, Title, Details, DirectorsName, Duration, Image } from "./styled"
import { useGetImage } from "../../../hooks/useGetImage"

const Movie = ({ movie }) => {
  const { image, isLoading } = useGetImage(movie.frontmatter.imageLocation)
  return (
    <Box opacity={!isLoading && image ? 1 : 0}>
      <Image src={image} alt={movie.frontmatter.title} />
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
