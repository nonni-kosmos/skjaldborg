import React from "react"
import styled, { css } from "styled-components"
import { greenTextColor, redColor } from "../../../layouts/PageContainer/styled"
import SocialMediaIcons from "../../../reusableComponents/SocialMediaIcons"
import { Link } from "gatsby"
import ArrowSvg from "../../../../static/assets/svg/arrow.svg"
import { useSelector } from "react-redux"

const Box = styled.div`
  text-align: center;
  max-width: 25rem;
  margin: 0 auto;
  padding-top: 7.5rem;
  #info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Title = styled.h1`
  color: ${greenTextColor};
  text-transform: uppercase;
  padding-bottom: 4rem;
`
// const Message = styled.p`
//   color: gray;
// `

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-top: 4rem;
`
const HomeText = styled.h2`
  color: ${redColor};
`
export const Arrow = styled(ArrowSvg)`
  transform: rotate(180deg);
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.hideonstate === "hide" &&
    css`
      display: none;
    `}
`

const Success = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Box>
      <Title>
        {icelandic ? "Innsending tókst!" : "Submission was successful!"}
      </Title>
      <div id="info-box">
        {/* <Message className="les-texti">
          Tengiliður er skráður sjálfkrafa á póstlista Skjaldborgar. Fylgist
          með!
        </Message> */}
        <SocialMediaIcons color="black"></SocialMediaIcons>
        <Anchor to="/">
          <HomeText className="titlar">
            {icelandic ? "Á forsíðu" : "To frontpage"}
          </HomeText>
          <Arrow></Arrow>
        </Anchor>
      </div>
    </Box>
  )
}

export default Success
