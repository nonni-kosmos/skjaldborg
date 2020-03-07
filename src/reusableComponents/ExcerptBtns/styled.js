import styled from "styled-components"
import { Link } from "gatsby"
import { redColor } from "../../layouts/PageContainer/styled"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: minmax(15rem, 20rem);
  grid-gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`
export const Box = styled(Link)`
  background: ${redColor};
  color: inherit;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  p {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    width: 100%;
  }
`
export const FillerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.7;
  transition: 0.5s ease-in-out;
  ${Box}:hover & {
    transform: scale(1.05);
  }
`
