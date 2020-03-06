import styled, { css } from "styled-components"
import { redColor } from "../../layouts/PageContainer/styled"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 5rem 5rem;
  max-width: 50%;
  margin: 0 auto;

  .login-options-wrap {
    display: grid;
    grid-gap: 1.5rem;
    text-align: center;
  }

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
  .submit-btn {
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  legend {
    margin: 1rem 0 1rem -3rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`
export const InputBox = styled.input`
  padding: 1rem;
  font-size: 1rem;
  margin: 1em 0 1rem;
  ${props =>
    props.email &&
    css`
      color: ${props => props.color};
    `}
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
export const FileBTN = styled.label`
  padding: 1rem;
  border: 1px solid;
  width: auto;
  margin: 0 auto;
  margin-bottom: 1rem;
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.status === "ok" &&
    css`
      background: green;
      color: white;
    `}
`
