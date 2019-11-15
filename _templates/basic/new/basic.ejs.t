---
to: src/components/<%=title%>/index.js
---

import React from 'react'
import {Container} from "./Styled"


const <%= h.capitalize(title) %> = () => {
    return (
        <Container>
           <%= title %>
        </Container>
    )
}

export default <%= h.capitalize(title) %>





