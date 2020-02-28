import React from "react"
import { Box, Title, Details, DirectorsName, Duration, Image } from "./styled"
import { useGetImage } from "../../../hooks/useGetImage"
import { titleToURL } from "../../../methods"
import slugify from "slugify"

const Movie = ({ movie: { title, director, duration, imageLocation } }) => {
  const { image, isLoading } = useGetImage(imageLocation)
  return (
    <Box
      to={"/heimildamyndir/" + slugify(title)}
      opacity={!isLoading && image ? 1 : 0}
    >
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Details>
        <DirectorsName className="les-texti">{director}</DirectorsName>
        <Duration>{duration} mín.</Duration>
      </Details>
    </Box>
  )
}

export default Movie
