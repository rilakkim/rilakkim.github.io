import React from "react";
import IconLinkedIn from "../images/icons/icon-linkedin.png";
import IconTwitter from "../images/icons/icon-twitter.png";
import IconInstagram from "../images/icons/icon-instagram.png";
import IconGithub from "../images/icons/icon-github.png";

const SnsLinks = () => (
    <div style={{ margin: "0 auto" }}>
        <a href="https://www.linkedin.com/in/hyungjun-kim-a87746113/" target="_blank">
            <img src={IconLinkedIn}/>
        </a>
        <a href="https://twitter.com/JuneKimDev" target="_blank">
            <img src={IconTwitter}/>
        </a>
        <a href="https://www.instagram.com/rilakkim/" target="_blank">
            <img src={IconInstagram}/>
        </a>
        <a href="https://github.com/rilakkim" target="_blank">
            <img src={IconGithub}/>
        </a>
    </div>
)

export default SnsLinks;
