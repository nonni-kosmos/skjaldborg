import React from "react"
import { List, Item } from "./styled"
import { graphql, StaticQuery } from "gatsby"
import Anchor from "../../../../reusableComponents/Anchor"

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
          <Anchor color="green" item={item} />
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
