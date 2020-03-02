import React, { useEffect, useState, useRef } from "react"
import styled, { css } from "styled-components"

const Section = styled.div`
  opacity: 0;
  transform: translateX(20vh);
  visibility: hidden;
  transition: opacity 0.2s ease-out, transform 0.5s ease-out;
  will-change: opacity, visibility;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: none;
      visibility: visible;
    `}
`

const Fadeinsection = ({ children }) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef()

  useEffect(() => {
    const current = domRef.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(current)
    return () => observer.unobserve(current)
  }, [])

  return (
    <Section visible={isVisible} ref={domRef}>
      {children}
    </Section>
  )
}

export default Fadeinsection
