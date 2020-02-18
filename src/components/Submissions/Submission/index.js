// components
import Applicant from "./Applicant"
import { Container, SubmissionDetails } from "./Styled"

// tech
import React from "react"
import { convert } from "../../../methods"

const Submission = ({ movie }) => {
  console.log(movie.frontmatter)
  return (
    <Container>
      {" "}
      <h1>{movie.frontmatter.name}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: movie.frontmatter.markdown }}
      ></div>
      <SubmissionDetails>
        <Applicant id={movie.frontmatter.applicantId}></Applicant>
        <p>At {convert(movie.frontmatter.createdAt.seconds)}</p>
      </SubmissionDetails>
    </Container>
  )
}

export default Submission
