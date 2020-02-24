import React, { useState } from "react"
import { Button, List, Item } from "./styled"
import { graphql, StaticQuery } from "gatsby"

const Dropdown = ({
  children,
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  const [open, setOpen] = useState(false)
  return (
    <Button onClick={() => setOpen(!open)}>
      {children}
      {open ? "-" : "+"}
      <List height={open ? 5 + "rem" : "0"}>
        {dropdownpages.map(item => (
          <Item>{item.name}</Item>
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
