import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: ${props => props.width};
  transition: 0.2s ease-in-out;
  background: #e5e5e5;
  z-index: 5;
  padding-top: 2rem;
  overflow: hidden;
`
export const List = styled.div`
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 2;
  position: absolute;
  overflow: auto;
  display: table;
  margin-top: 7.5rem;
  margin-left: 2.5rem;
`
export const Sensor = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: -100%;
  z-index: 1;
`
