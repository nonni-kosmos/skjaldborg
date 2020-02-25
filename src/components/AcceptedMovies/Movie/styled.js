import styled from "styled-components"
import { greenColor } from "../../PageContainer/styled"

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgba(16, 16, 16, 1);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.5;
  }
`
export const Title = styled.p`
  color: ${greenColor};
  font-size: 1.5rem;
  z-index: 1;
`
export const Details = styled.div`
  position: absolute;
  bottom: 0.5rem;
  text-align: center;
  z-index: 1;
  p {
    color: ${greenColor};
    margin: 0;
    font-size: 0.9rem;
  }
`
export const DirectorsName = styled.p``
export const Duration = styled.p``
