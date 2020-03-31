import React from "react"
import { Video } from "cloudinary-react"
import styled from "styled-components"
import { breakpoints } from "../../constants"

const Wrap = styled.div`
  video {
    position: relative;
    height: 100%;
    margin-bottom: -1rem;
    margin-left: 0rem;
    /** desktop */
    @media only screen and (min-width: ${breakpoints.desktop}) {
      position: absolute;
      width: 100%;
      height: auto;
      margin-bottom: 0;
      margin-left: 0;
    }
  }
`

const CloudinaryVideo = ({ publicId }) => {
  return (
    <Wrap>
      <Video
        muted
        loop
        playsInline
        autoPlay
        publicId={publicId}
        cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
      ></Video>
    </Wrap>
  )
}

export default CloudinaryVideo
