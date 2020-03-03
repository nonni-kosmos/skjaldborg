import styled from "styled-components"
import { greenColor } from "../PageContainer/styled"
import Img from "gatsby-image"

export const Container = styled.div`
  background: ${greenColor};
  padding: 5rem;
  margin: 2rem 0 0 0;
  position: relative;

  h1 {
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
  }
  div.sponsor-grid {
    display: grid;
    grid-template-columns: repeat(5, 7.5rem);
    grid-gap: 4rem;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
  }
`
export const Icon = styled.div`
  box-sizing: border-box;
  padding: 10%;
`
export const Image = styled(Img)`
  height: 100%;
`
