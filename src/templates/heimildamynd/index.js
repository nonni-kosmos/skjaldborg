import React from "react"
import { graphql } from "gatsby"

const Movie = ({ data: { movie } }) => {
  return <h1>{movie.title}</h1>
}

export const query = graphql`
  query($id: String!) {
    movie(id: { eq: $id }) {
      title
    }
  }
`

export default Movie
