import React from "react"
import { Container, List, Sensor } from "./styled"
import { useSelector, useDispatch } from "react-redux"
import { TRIGGER_MENU } from "../../state/action"
import Item from "./Item"
import { graphql, StaticQuery } from "gatsby"

const Menu = ({
  data: {
    site: {
      siteMetadata: { pages },
    },
  },
}) => {
  const menu = useSelector(state => state.reducer.menu)
  const dispatch = useDispatch()
  return (
    <>
      <Container width={menu === "open" ? "50%" : "0%"}>
        <Sensor
          onClick={() => dispatch({ type: TRIGGER_MENU, trigger: "closed" })}
        ></Sensor>
        <List>
          {pages.map((item, index) => (
            <Item key={index} item={item}></Item>
          ))}
        </List>
      </Container>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            pages {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props}></Menu>}
  ></StaticQuery>
)
