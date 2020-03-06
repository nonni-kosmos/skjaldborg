import React, { useEffect, useState } from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { authState } from "rxfire/auth"
import styled from "styled-components"
import { redColor } from "../../../layouts/PageContainer/styled"

const Box = styled.div`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1.5rem;
  button {
    background: transparent;
    border: ${redColor} 1px solid;
    margin: 0 auto 0 0;
    box-sizing: border-box;
    padding: 0.6rem;
    color: ${redColor};
    &&:hover {
      cursor: pointer;
    }
  }
`

const Applicant = () => {
  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()
  const [applicant, setApplicant] = useState(null)
  useEffect(() => {
    if (!isLoading) {
      authState(auth).subscribe(user => {
        setApplicant(user)
      })
    }
  }, [isLoading, auth])
  return (
    <Box>
      <legend>Tengiliður: </legend>
      <p>{applicant ? applicant.email : ""}</p>
      <button onClick={() => auth.signOut()}>Breyta tengilið</button>
    </Box>
  )
}

export default Applicant
