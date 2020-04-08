import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Facebook from "./facebook"
import Instagram from "./instagram"

const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 5rem;
`
const SocialMediaIcons = ({
  color,
  data: {
    site: {
      siteMetadata: {
        contact: { socialMedia },
      },
    },
  },
}) => {
  return (
    <Wrap>
      {socialMedia.map((item, index) =>
        item.name === "facebook" ? (
          <a
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            href={item.url}
          >
            <Facebook color={color}></Facebook>
          </a>
        ) : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            href={item.url}
          >
            <Instagram color={color}></Instagram>
          </a>
        )
      )}
    </Wrap>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            contact {
              socialMedia {
                name
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SocialMediaIcons data={data} {...props}></SocialMediaIcons>
    )}
  ></StaticQuery>
)
