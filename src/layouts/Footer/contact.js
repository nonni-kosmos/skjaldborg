import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1,
    p {
      width: 100%;
      padding-left: 2rem;
    }
    p {
      margin: 0;
    }
    h1 {
      margin: 0.5rem 0;
      font-size: 1.6rem;
    }
  }
`
const Above = styled.h1`
  color: white;
  text-transform: uppercase;
  a {
    padding-right: 1rem;
  }
`
const Below = styled.p`
  color: white;
`

const Contact = ({
  data: {
    site: {
      siteMetadata: {
        contact: { people, socialMedia },
      },
    },
  },
}) => {
  return (
    <Box>
      <div className="box" id="left-box">
        <Above>Contact</Above>
        {people.map((item, index) => (
          <Below className="les-texti" key={index}>
            {item.name}
          </Below>
        ))}
      </div>
      <div className="box" id="right-box">
        <Above>
          {socialMedia.map((item, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
            >
              <img src={item.icon} alt={item.name + " icon"}></img>
            </a>
          ))}
        </Above>
        {people.map((item, index) => (
          <Below className="les-texti" key={index}>
            {item.tel}
          </Below>
        ))}
      </div>
    </Box>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            contact {
              people {
                name
                tel
              }
              socialMedia {
                name
                url
                icon
              }
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} {...props}></Contact>}
  ></StaticQuery>
)
