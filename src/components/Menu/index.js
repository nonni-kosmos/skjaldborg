import React from "react"
import { Container, List, Sensor } from "./styled"
import { useSelector, useDispatch } from "react-redux"
import { TRIGGER_MENU, TRIGGER_RED_CURSOR } from "../../state/action"
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
      <Sensor
        width={menu === "open" ? "50%" : "0%"}
        onClick={() => dispatch({ type: TRIGGER_MENU, trigger: "closed" })}
        onMouseOver={() =>
          dispatch({
            type: TRIGGER_RED_CURSOR,
            trigger: `hide`,
          })
        }
        onFocus={() =>
          dispatch({
            type: TRIGGER_RED_CURSOR,
            trigger: `hide`,
          })
        }
      ></Sensor>
      <Container width={menu === "open" ? "50%" : "0%"}>
        <List
          onMouseOver={() =>
            dispatch({
              type: TRIGGER_RED_CURSOR,
              trigger: `show`,
            })
          }
          onFocus={() =>
            dispatch({
              type: TRIGGER_RED_CURSOR,
              trigger: `show`,
            })
          }
          onMouseLeave={() =>
            dispatch({
              type: TRIGGER_RED_CURSOR,
              trigger: `hide`,
            })
          }
        >
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
