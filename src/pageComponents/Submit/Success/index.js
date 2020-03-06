import React from "react"
import styled from "styled-components"
import { greenTextColor } from "../../../layouts/PageContainer/styled"

const Box = styled.div`
  text-align: center;
  max-width: 25rem;
  margin: 0 auto;
  padding-top: 7.5rem;
`
const Title = styled.h1`
  color: ${greenTextColor};
  text-transform: uppercase;
`
const Message = styled.p``
const Success = () => {
  return (
    <Box>
      <Title>Innsending tókst!</Title>
      <Message>
        Tengiliður er skráður sjálfkrafa á póstlista Skjaldborgar. Fylgist með!
      </Message>
      <div>FB, fleiri línkar</div>
    </Box>
  )
}

export default Success
