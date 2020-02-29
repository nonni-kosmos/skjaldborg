// components
import { Container } from "./styled"
import PageTitle from "../PageTitle"
import Movie from "./Movie"
// tech
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const AcceptedMovies = ({
  data: {
    allMovie: { nodes: submissions },
  },
}) => {
  return (
    <>
      <PageTitle className="titlar">Heimildamyndir</PageTitle>
      <Container>
        {submissions.map((movie, index) => (
          <Movie key={index} movie={movie}></Movie>
        ))}
      </Container>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMovie(filter: { accepted: { eq: true } }) {
          nodes {
            title
            director
            imageLocation
            duration
            createdAt
            applicantName
            applicantId
          }
        }
      }
    `}
    render={data => <AcceptedMovies data={data} {...props}></AcceptedMovies>}
  ></StaticQuery>
)
