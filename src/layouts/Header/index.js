import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Container } from "./styled"
import Logo from "./Logo"
import Text from "./Text"

const Header = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  return (
    <Container>
      <Logo></Logo>
      <div id="box">
        <Text meta={siteMetadata} about></Text>
        <Text meta={siteMetadata} info></Text>
      </div>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            subtitle
            year
            period
            location
          }
        }
      }
    `}
    render={data => <Header data={data} {...props}></Header>}
  ></StaticQuery>
)
