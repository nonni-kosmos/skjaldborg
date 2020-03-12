import React from "react"
import { Box, ImageContainer, Image, Info } from "./styled"

const Guesthouse = ({
  guesthouse: {
    frontmatter: { title, mynd, google_maps_url, stadsetning, heimasida },
  },
}) => {
  return (
    <Box target="_blank">
      <ImageContainer>
        <Image fluid={mynd.childImageSharp.fluid}></Image>
      </ImageContainer>
      <Info>
        <p className="guesthouse-title">
          <a
            className="guesthouse-website-anchor"
            href={heimasida}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </p>
        <div className="contact-details-wrap">
          <div>
            <p>{stadsetning.heimilisfang}</p>
            <p>Sími {stadsetning.simi}</p>
          </div>
          <a
            className="guesthouse-map-anchor"
            href={google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Kort</p>
          </a>
        </div>
      </Info>
    </Box>
  )
}

export default Guesthouse
