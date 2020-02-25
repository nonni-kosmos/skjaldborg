import styled from "styled-components"
import { redColor } from "../PageContainer/styled"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 5rem 5rem;
  max-width: 50%;
  margin: 0 auto;

  /** mobile */
  width: 100%;
  max-width: 100%;

  /** tablets */
  @media only screen and (min-width: 600px) {
    max-width: 85%;
  }

  /** desktop */
  @media only screen and (min-width: 850px) {
    max-width: 65%;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  .form-label {
    font-size: 1.5rem;
    margin-left: -3rem;
  }
  textarea {
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  #submit-btn {
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  legend {
    margin: 1rem 0 1rem -3rem;
    font-size: 1.5rem;
  }
`
export const InputBox = styled.input`
  padding: 1rem;
  font-size: 1rem;
  margin: 1em 0 1rem;
`

export const PageTitle = styled.h1`
  color: ${redColor};
`
export const FormTitle = styled.p`
  margin-left: -4rem;
  font-size: 1.5rem;
`
export const Warning = styled.p`
  color: ${redColor};
  margin: 0;
  margin-top: -0.5rem;
  font-size: 0.8rem;
`
