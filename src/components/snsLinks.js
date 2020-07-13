import React from "react"
import styled from "styled-components"

import IconLinkedIn from "../images/svg/icon-linkedin.svg"
import IconGithub from "../images/svg/icon-github.svg"
import IconTwitter from "../images/svg/icon-twitter.svg"
import IconInstagram from "../images/svg/icon-instagram.svg"

const StyledSnsLinks = styled.div`
    display: flex;
    justify-content: center;
`

const StyledSocialIcon = styled.a`
    display: inline-block;
    height: 30px;
    width: 30px;
    margin: 0 10px;
`
    
const SnsLinks = () => (
    <StyledSnsLinks>
        <StyledSocialIcon href="https://www.linkedin.com/in/hyungjun-kim-a87746113/" 
           target="_blank">
            <IconLinkedIn></IconLinkedIn>
        </StyledSocialIcon>
        <StyledSocialIcon href="https://github.com/rilakkim"
           target="_blank">
            <IconGithub width="30"></IconGithub>
        </StyledSocialIcon>
        <StyledSocialIcon href="https://twitter.com/JuneKimDev"
           target="_blank">
            <IconTwitter width="30"></IconTwitter>
        </StyledSocialIcon>
        <StyledSocialIcon href="https://www.instagram.com/rilakkim/"
           target="_blank">
            <IconInstagram width="30"></IconInstagram>
        </StyledSocialIcon>
    </StyledSnsLinks>
)

export default SnsLinks;
