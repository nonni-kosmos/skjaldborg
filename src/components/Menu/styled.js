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
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0 4.5rem;
  overflow: hidden;
  height: 100%;
  z-index: 2;
`
export const Sensor = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: -100%;
  z-index: 1;
`
