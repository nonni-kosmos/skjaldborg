import React, { useState } from "react"
import { Button, List, Item, Title } from "./styled"
import Anchor from "../../../Anchor"
import { graphql, StaticQuery } from "gatsby"
import { useDispatch } from "react-redux"
import { TRIGGER_MENU } from "../../../../state/action"

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
      <Title className="titlar">
        {children}
        {open ? "-" : "+"}
      </Title>
      <List height={open ? 5 + "rem" : "0"} padTop={open ? "1.5rem" : 0}>
        {dropdownpages.map((item, index) => (
          <Item
            className="titlar"
            key={index}
            onClick={() => dispatch({ type: TRIGGER_MENU, trigger: "closed" })}
          >
            <Anchor color="red" item={item}></Anchor>
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
