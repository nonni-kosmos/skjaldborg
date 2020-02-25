import styled from "styled-components"
import { greenColor } from "../../PageContainer/styled"

export const Box = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Title = styled.p`
  color: ${greenColor};
  font-size: 1.5rem;
`
export const Details = styled.div`
  position: absolute;
  bottom: 0.5rem;
  text-align: center;
  p {
    color: ${greenColor};
    margin: 0;
    font-size: 0.9rem;
  }
`
export const DirectorsName = styled.p``
export const Duration = styled.p``
