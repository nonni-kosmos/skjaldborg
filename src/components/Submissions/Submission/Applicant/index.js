import React, { useState, useEffect } from "react"
import { useGetSingleDoc } from "../../../../hooks/useGetSingleDoc"

const Applicant = ({ id }) => {
  const [fullname, setFullname] = useState(null)
  const { doc } = useGetSingleDoc("applicants", id)
  useEffect(() => {
    if (doc) {
      setFullname(doc.name)
    }
  }, [doc])

  return <p>Submitted by: {fullname} </p>
}

export default Applicant
