import React from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
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

  if (!isLoading && auth.currentUser) {
    return (
      <Box>
        <>
          <legend>Tengiliður: </legend>
          <p>{auth.currentUser.email}</p>
          <button onClick={() => auth.signOut()}>Breyta tengilið</button>
        </>
      </Box>
    )
  } else return <p>loading applicant</p>
}

export default Applicant
