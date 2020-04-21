import React from 'react'
import PageTitle from "../reusableComponents/PageTitle"
import Header from "../layouts/Header"
import useGetAuth from "../hooks/useGetAuth"

export default () => {
  useGetAuth()
  return (
    <>
      <Header mode="red"></Header>
      <div style={{ paddingTop: "10rem" }}>
        <PageTitle>Þessi síða fannst ekki! ⛱</PageTitle>
      </div>
    </>
  )
}


