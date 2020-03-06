import React, { useEffect, useState } from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { authState } from "rxfire/auth"

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
    <div>
      <legend>Tengiliður: </legend>
      <p>{applicant ? applicant.email : ""}</p>
      <button onClick={() => auth.signOut()}>Breyta tengilið</button>
    </div>
  )
}

export default Applicant
