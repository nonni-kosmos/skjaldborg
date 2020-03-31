import React from "react"
import { Image, Transformation } from "cloudinary-react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Wrap = styled.div`
  height: 100%;
  width: 100%;
`

const CloudinaryImage = ({ publicId }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Wrap>
      <Image
        secure
        cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
        publicId={publicId}
        responsive
        width={platform === "desktop" ? "100%" : "auto"}
        height={platform === "desktop" ? "auto" : 500}
      >
        <Transformation crop="scale"></Transformation>
      </Image>
    </Wrap>
  )
}

export default CloudinaryImage
