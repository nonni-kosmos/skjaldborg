import React from "react"
import { Container, List } from "./styled"
import { useSelector } from "react-redux"
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
  return (
    <Container width={menu === "open" ? "50%" : "0%"}>
      <List>
        {pages.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </List>
    </Container>
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
