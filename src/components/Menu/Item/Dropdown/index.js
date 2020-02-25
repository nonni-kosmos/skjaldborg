import React, { useState } from "react"
import { Button, List, Item, Title } from "./styled"
import { graphql, StaticQuery } from "gatsby"
import { useDispatch } from "react-redux"
import { SET_RED_CURSOR_SIZE } from "../../../../state/action"

const Dropdown = ({
  children,
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  return (
    <Button onClick={() => setOpen(!open)}>
      <Title
        onMouseOver={() => {
          dispatch({ type: SET_RED_CURSOR_SIZE, size: `large` })
        }}
        onFocus={() => {
          dispatch({ type: SET_RED_CURSOR_SIZE, size: `large` })
        }}
      >
        {children}
        {open ? "-" : "+"}
      </Title>
      <List height={open ? 5 + "rem" : "0"} padTop={open ? "1.5rem" : 0}>
        {dropdownpages.map(item => (
          <Item
            onMouseOver={() => {
              dispatch({
                type: SET_RED_CURSOR_SIZE,
                size: `small`,
              })
            }}
            onFocus={() => {
              dispatch({
                type: SET_RED_CURSOR_SIZE,
                size: `small`,
              })
            }}
          >
            {item.name}
          </Item>
        ))}
      </List>
    </Button>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            dropdownpages {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => <Dropdown data={data} {...props}></Dropdown>}
  ></StaticQuery>
)
