import React from "react"
import { List, Item, Anchor } from "./styled"
import { graphql, StaticQuery } from "gatsby"

const Nav = ({
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  return (
    <List>
      {dropdownpages.map((item, index) => (
        <Item key={index}>
          <Anchor to={item.slug}>{item.name}</Anchor>
        </Item>
      ))}
    </List>
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
    render={data => <Nav data={data} {...props}></Nav>}
  ></StaticQuery>
)
