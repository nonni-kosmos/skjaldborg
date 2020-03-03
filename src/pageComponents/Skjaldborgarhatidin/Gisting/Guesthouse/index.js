import React from "react"
import { Box, ImageContainer, Image, Info } from "./styled"

const Guesthouse = ({
  guesthouse: {
    frontmatter: { title, mynd, google_maps_url, stadsetning },
  },
}) => {
  return (
    <Box href={google_maps_url} target="_blank">
      <ImageContainer>
        <Image fluid={mynd.childImageSharp.fluid}></Image>
      </ImageContainer>
      <Info>
        <p className="guesthouse-title">{title}</p>
        <div className="contact-details-wrap">
          <p>{stadsetning.baer}</p>
          <div>
            <p>{stadsetning.heimilisfang}</p>
            <p>Sími {stadsetning.simi}</p>
          </div>
        </div>
      </Info>
    </Box>
  )
}

export default Guesthouse
