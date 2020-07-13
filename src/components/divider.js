import React from "react"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Divider = styled.hr`
    margin: ${props => rhythm(props.margin || 1)} 0;
`

export default Divider;