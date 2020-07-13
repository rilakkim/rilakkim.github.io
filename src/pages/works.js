import React from 'react';
import { rhythm } from "../utils/typography"
import styled from "styled-components";

import Layout from "../components/layout"
import Work from "../components/work"
import Divider from "../components/divider"
import LogoContorionImage from "../images/logo-contorion.png"
import LogoSdsImage from "../images/logo-sds.png"

const controionListItems = [`TypeScript, SCSS, Gulp, Webpack`, `Responsive design`, `Mobile performance optimization`];
const efssListItems = [`AngularJS, React, Grunt, Gulp, Webpack`, `Implemented file storage API`, `Web performance optimization`];
const WorksSection = styled.div`
    min-width: 320px;
    margin: ${rhythm(2)} auto;
`;

const Works = () => {
    return (
        <Layout>
            <WorksSection id="works">
                <Work title={`Contorion`}
                    logo={LogoContorionImage}
                    timePeriod={`Feb. 2018 - Present`}
                    subTitle={`Developed and maintained applications of e-commerce business.`}
                    listItems={controionListItems}>
                </Work>
                <Divider margin="2"/>
                <Work title={`EFSS`}
                    logo={LogoSdsImage}
                    timePeriod={`2014 - 2017`}
                    subTitle={`Built enterprise collaboration web applications.`}
                    listItems={efssListItems}>
                </Work>
            </WorksSection>
        </Layout>
    )
}

export default Works;