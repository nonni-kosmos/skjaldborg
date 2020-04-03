import React from "react"
import styled from "styled-components"
import RosSvg from "../../../static/assets/eyrarrosin.svg"

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    box-sizing: border-box;
    padding: 1rem;
    height: 12rem;
    @media (max-width: 600px) {
      width: 10rem;
    }
  }
  .detail-wrap {
    border-left: 2px solid white;
    box-sizing: border-box;
  }
  p {
    color: white;
    margin: 0.5rem 0 0.5rem 3rem;
    font-size: 1.1rem;
    @media (max-width: 600px) {
      margin-left: 1.5rem;
    }
  }
`

const Eyrarros = () => {
  return (
    <Wrap>
      <img src={RosSvg} alt="eyrarros-logo"></img>
      <div className="detail-wrap">
        <p>Handhafi</p>
        <p>Eyrarrósarinnar</p>
        <p>2020</p>
      </div>
    </Wrap>
  )
}

export default Eyrarros
