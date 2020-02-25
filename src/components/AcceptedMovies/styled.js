import styled from "styled-components"
import { redColor } from "../PageContainer/styled"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 15rem));
  grid-auto-rows: 15rem;
  grid-gap: 1.5rem;
  box-sizing: border-box;
  padding: 2.5rem;
`
export const PageTitle = styled.h1`
  color: ${redColor};
  padding: 0 0 0 10rem;
`
