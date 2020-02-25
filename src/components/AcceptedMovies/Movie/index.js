import React from "react"
import { Box, Title, Details, DirectorsName, Duration } from "./styled"

const Movie = ({ movie }) => {
  return (
    <Box>
      <Title>{movie.frontmatter.name}</Title>
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
