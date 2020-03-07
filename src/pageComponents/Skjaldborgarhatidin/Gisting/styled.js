import styled from "styled-components"

export const GuesthousesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 20rem));
  grid-auto-rows: 20rem;
  justify-content: space-evenly;
  grid-gap: 3rem;
  overflow: hidden;
  /** mobile */
  padding: 1rem;
  /** tablets */
  @media only screen and (min-width: 600px) {
    padding: 2rem;
  }
  /** desktop */
  @media only screen and (min-width: 850px) {
    padding: 1rem 10rem 5rem;
  }
`
