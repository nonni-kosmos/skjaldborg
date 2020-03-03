import React from "react"
import { Container } from "./styled"
import Logo from "../Header/Logo"
import Text from "../Header/Text"
import { graphql, StaticQuery } from "gatsby"

const Footer = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  return (
    <Container>
      <div id="header-text-wrapper">
        <Logo footer></Logo>
        <Text footer meta={siteMetadata} about></Text>
        <Text footer meta={siteMetadata} info></Text>
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
    render={data => <Footer data={data} {...props}></Footer>}
  ></StaticQuery>
)
