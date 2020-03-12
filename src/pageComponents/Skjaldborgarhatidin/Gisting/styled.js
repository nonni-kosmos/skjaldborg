import styled from "styled-components"

export const GuesthousesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 20rem));
  grid-auto-rows: 20rem;
  justify-content: space-evenly;
  grid-gap: 3rem;
  overflow: hidden;
  padding: 5rem;
`
