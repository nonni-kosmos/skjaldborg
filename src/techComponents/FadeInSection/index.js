import React, { useEffect, useState, useRef } from "react"
import styled, { css } from "styled-components"

const Slider = styled.div`
  opacity: 0;
  transform: ${props => props.translate};
  visibility: hidden;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  will-change: opacity, visibility;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: none;
      visibility: visible;
    `}
`
const Fader = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: height 1s, opacity 2s;
  will-change: visibility, opacity;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: none;
      visibility: visible;
    `}
`
// intensity should be between 1-100
const Fadeinsection = ({ children, direction, intensity, effectType }) => {
  const [isVisible, setVisible] = useState(true)
  const [translate, setTranslate] = useState(`translateY(20vh)`)

  // config setup
  useEffect(() => {
    if (direction === "left") setTranslate(`translateX(-${intensity}vh)`)
    else if (direction === "right") setTranslate(`translateX(${intensity}vh)`)
    else if (direction === "up") setTranslate(`translateY(-${intensity}vh)`)
    else if (direction === "down") setTranslate(`translateY(${intensity}vh)`)
    else setTranslate(`translateY(20vh)`)
  }, [direction, intensity])

  const domRef = useRef()

  useEffect(() => {
    const current = domRef.current

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log(entry.isIntersecting)
          setVisible(entry.isIntersecting)
          if (entry.isIntersecting) {
            observer.unobserve(current)
          }
        })
      },
      { threshold: [0.2, 0.4, 0.6, 0.8] }
    )
    observer.observe(current)

    return () => observer.unobserve(current)
  })

  return effectType === "fader" ? (
    <Fader visible={isVisible} ref={domRef}>
      {children}
    </Fader>
  ) : (
    <Slider translate={translate} visible={isVisible} ref={domRef}>
      {children}
    </Slider>
  )
}

export default Fadeinsection
