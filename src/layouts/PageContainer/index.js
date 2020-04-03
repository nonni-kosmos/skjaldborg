// components
import Burger from "../Burger"
import Menu from "../Menu"
import LangBtn from "../LangBtn"
import { Loader, Container } from "./styled"
import Cookies from "../Cookies"

// tech
import React from "react"
import { useSelector } from "react-redux"

const PageContainer = ({ children, pathname }) => {
  const platform = useSelector(state => state.reducer.platform)

  return (
    <Loader opacity={platform}>
      <div style={{ background: "white" }} className="page-wrap">
        <Cookies></Cookies>
        <Burger></Burger>
        {platform !== "mobile" ? <LangBtn></LangBtn> : null}
        <Menu></Menu>
        <Container>{children}</Container>
      </div>
    </Loader>
  )
}

export default PageContainer
