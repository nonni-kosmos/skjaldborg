// components
import { Header } from "./Styled"
import Submissions from "../../../Submissions"

// tech
import React from "react"
import useGetAuth from "../../../../hooks/useGetAuth"
import { useSelector } from "react-redux"

const Content = () => {
  const { auth } = useGetAuth()
  const profile = useSelector(state => state.firebaseReducer.profile)
  return (
    <>
      <Header>
        <p>Velkomin/n {profile ? profile.email : ""}</p>
        <button onClick={() => auth.signOut()}>Log out</button>
      </Header>
      {/* noRestrict prop only in the backend! */}
      <Submissions noRestrict></Submissions>
    </>
  )
}

export default Content
