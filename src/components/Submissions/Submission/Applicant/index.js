import React, { useState, useEffect } from "react"
import { useGetSingleDoc } from "../../../../hooks/useGetSingleDoc"

const Applicant = ({ id }) => {
  const [fullname, setFullname] = useState(null)
  console.log("sending in this applicant ID: " + id)
  const applicant = useGetSingleDoc("applicants", id)
  useEffect(() => {
    if (applicant.doc) {
      setFullname(applicant.doc.firstname + " " + applicant.doc.lastname)
    }
  }, [applicant.doc])

  return <p>Submitted by: {fullname} </p>
}

export default Applicant
