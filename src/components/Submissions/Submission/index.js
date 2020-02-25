// components
import Applicant from "./Applicant"
import { Container, SubmissionDetails } from "./Styled"

// tech
import React, { useState, useEffect } from "react"
import { convert } from "../../../methods"
import { useGetSingleDoc } from "../../../hooks/useGetSingleDoc"

const Submission = ({ movie }) => {
  const [accepted, accept] = useState(false)

  useEffect(() => {
    accept(movie.frontmatter.accepted)
  }, [movie.frontmatter.accepted])

  const { doc } = useGetSingleDoc("movies", movie.id)

  const onSelect = e => {
    accept(e.target.checked)
    doc.update({
      accepted: e.target.checked,
    })
  }
  if (movie) {
    return (
      <Container>
        <h1>{movie.frontmatter.name}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: movie.frontmatter.description }}
        ></div>
        <SubmissionDetails>
          <Applicant id={movie.frontmatter.applicantId}></Applicant>
          <p>At {convert(movie.frontmatter.createdAt)}</p>
        </SubmissionDetails>
        <label>
          Velja mynd
          <input
            checked={accepted}
            type="checkbox"
            onChange={e => onSelect(e)}
          ></input>
        </label>
      </Container>
    )
  } else return null
}

export default Submission
