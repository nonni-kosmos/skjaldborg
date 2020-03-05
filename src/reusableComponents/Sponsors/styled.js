import styled from "styled-components"
import { greenColor } from "../../layouts/PageContainer/styled"
import Img from "gatsby-image"

export const Container = styled.div`
  background: ${greenColor};
  padding: 3rem;
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
    grid-template-columns: repeat(auto-fit, minmax(7rem, 7rem));
    grid-gap: 4rem;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
  }
`
export const Icon = styled.div`
  box-sizing: border-box;
`
export const Image = styled(Img)`
  height: 100%;
`
