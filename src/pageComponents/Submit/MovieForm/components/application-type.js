import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  padding-top: 1.5rem;
`

const ApplicationType = React.forwardRef(({ label }, ref) => (
  <>
    <Container>
      <label>{label}</label>
    </Container>
  </>
))

export default ApplicationType
