import styled from "styled-components"

export const Container = styled.div``
export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  box-sizing: border-box;
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
