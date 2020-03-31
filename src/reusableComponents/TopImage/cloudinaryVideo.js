import React from "react"
import { Video, Transformation } from "cloudinary-react"
import styled from "styled-components"
import { breakpoints } from "../../constants"
import { useSelector } from "react-redux"

const Wrap = styled.div`
  video {
    position: absolute;
    height: 100%;
    object-fit: cover;
    margin-bottom: -1rem;
    margin-left: 0rem;
    /* desktop */
    @media only screen and (min-width: ${breakpoints.desktop}) {
      width: 100%;
      height: auto;
      margin-bottom: 0;
      margin-left: 0;
    }
  }
`

const CloudinaryVideo = ({ publicId }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Wrap>
      <Video
        muted
        loop
        playsInline
        autoPlay
        publicId={publicId}
        cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
      >
        {platform !== "desktop" ? (
          <Transformation
            crop="fill"
            gravity={"center"}
            height={"400"}
            aspectRatio={"1:1"}
          ></Transformation>
        ) : null}
      </Video>
    </Wrap>
  )
}

export default CloudinaryVideo
