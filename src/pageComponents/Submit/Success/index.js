import React from "react"
import styled from "styled-components"
import { greenTextColor, redColor } from "../../../layouts/PageContainer/styled"
import SocialMediaIcons from "../../../reusableComponents/SocialMediaIcons"
import { Link } from "gatsby"
import ArrowSvg from "../../../../static/assets/svg/arrow.svg"

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
`
const Message = styled.p`
  color: gray;
`

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-top: 4rem;
`
const HomeText = styled.h2`
  color: ${redColor};
`
const Arrow = styled(ArrowSvg)`
  transform: rotate(180deg);
`

const Success = () => {
  return (
    <Box>
      <Title>Innsending tókst!</Title>
      <div id="info-box">
        <Message className="les-texti">
          Tengiliður er skráður sjálfkrafa á póstlista Skjaldborgar. Fylgist
          með!
        </Message>
        <SocialMediaIcons color="black"></SocialMediaIcons>
        <Anchor cover to="/">
          <HomeText className="titlar">Aftur á forsíðu</HomeText>
          <Arrow></Arrow>
        </Anchor>
      </div>
    </Box>
  )
}

export default Success
