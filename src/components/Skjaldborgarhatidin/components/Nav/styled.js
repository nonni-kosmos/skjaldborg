import styled from "styled-components"
import { Link } from "gatsby"
import { greenTextColor } from "../../../PageContainer/styled"

export const List = styled.div``
export const Item = styled.p``
export const Anchor = styled(Link)`
  text-decoration: none;
  color: ${greenTextColor};
  text-transform: uppercase;
  font-size: 1.2rem;
`