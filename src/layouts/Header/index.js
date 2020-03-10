import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

import { Container, Wrap } from "./styled"
import Logo from "./Logo"
import Text from "./Text"

const Header = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Wrap>
      <Container platform={platform}>
        <Logo></Logo>
        {platform === "desktop" ? (
          <div id="box">
            <Text meta={siteMetadata} info></Text>
          </div>
        ) : null}
      </Container>
    </Wrap>
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
