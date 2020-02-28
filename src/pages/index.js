import React from "react"
import styled from "styled-components"
import { redColor } from "../components/PageContainer/styled"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const TextBox = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  h1 {
    color: ${redColor};
    font-size: 2rem;
    margin: 0;
  }
  p {
    color: ${redColor};
    font-size: 1.2rem;
    #link {
      color: ${redColor};
    }
  }
`
const ImageContainer = styled.div`
  height: 100%;
  width: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  /** browser */
  @media only screen and (min-width: 750px) {
    position: absolute;
    width: 350px;
    height: 250px;
    top: 50%;
    left: 50%;
    margin-top: -125px;
    margin-left: -175px;
  }
`

/* ATH* Setja linkinn: https://www.facebook.com/skjaldborg.hatid.islenskra.heimildamynda/ undir FACEBOOK. */

const index = ({ data: { imageSharp: logo } }) => {
  return (
    <>
      <TextBox>
        <h1 className="titlar">
          VEFUR Í VINNSLU / <br /> SITE UNDER CONSTRUCTION
        </h1>
        <p>
          SKJALDBORG - HÁTÍÐ ÍSLENSKRA HEIMILDAMYNDA <br /> VERÐUR HALDIN 29.MAÍ
          - 1.JÚNÍ 2020
        </p>
        <p>OPNUM FYRIR UMSÓKNIR SEINNI HLUTA MARS 2020</p>
      </TextBox>
      <ImageContainer>
        <Img fluid={logo.fluid}></Img>
      </ImageContainer>
      <TextBox>
        <h1 className="titlar">
          SKJALDBORG - ICELANDIC DOCUMENTARY FILM FESTIVAL MAY 29TH-JUNE 1ST
          2020
        </h1>
        <p>CALL FOR ENTRIES OPEN SECOND HALF OF MARCH 2020</p>
        <p>
          WATCH THIS SPACE & FOLLOW US ON{" "}
          <a
            id="link"
            href="https://www.facebook.com/skjaldborg.hatid.islenskra.heimildamynda/"
          >
            FACEBOOK
          </a>
        </p>
      </TextBox>
    </>
  )
}

export const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "skjaldborg_logo.png" } }) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export default index
