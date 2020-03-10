import styled from "styled-components"
import { greenColor } from "../../layouts/PageContainer/styled"
import Img from "gatsby-image"

export const Container = styled.div`
  background: ${greenColor};
  padding: 3rem;
  margin: 2rem 0 7.5rem 0;
  position: relative;

  h1 {
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
  }
  div.sponsor-grid-top5 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4rem;
    box-sizing: border-box;
    width: 100%;
    img {
      height: 8rem;
      max-width: 15rem;
      margin: 0 auto;
    }
    a {
      margin: 0 auto;
    }
  }
`
export const Icon = styled.div`
  box-sizing: border-box;
`
export const Image = styled(Img)`
  height: 100%;
`
