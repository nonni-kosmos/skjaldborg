import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    }
    h1 {
        font-weight: normal;
    }
    ::selection {
        color: #9DD79A;
        background-color: #E64746;
    }
    .selected > span {
        opacity: 0.6;
    }
`
