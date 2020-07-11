import React from 'react';
import { rhythm } from "../utils/typography"
import styled from "styled-components";

import Layout from "../components/layout"
import Work from "../components/work"
import LogoContorionImage from "../images/logo-contorion.png"
import LogoSdsImage from "../images/logo-sds.png"

const controionListItems = [`TypeScript, SCSS, Gulp, Webpack`, `Responsive design`, `Mobile performance optimization`];
const efssListItems = [`Implemented file storage UI.`, `AngularJS, React, Grunt, Gulp, Webpack.`, `Web performance optimization`];
const WorksSection = styled.div`
    min-width: 700px;
    margin: ${rhythm(2)};
`;

const Works = () => {
    return (
        <Layout>
            <WorksSection id="works">
                <Work title={`Contorion`}
                    logo={LogoContorionImage}
                    timePeriod={`Feb. 2018 - Present`}
                    subTitle={`E-commerce for professional tools.`}
                    listItems={controionListItems}>
                </Work>
                <Work title={`EFSS`}
                    logo={LogoSdsImage}
                    timePeriod={`2014 - 2017`}
                    subTitle={`Enterprise collaboration web app.`}
                    listItems={efssListItems}>
                </Work>
            </WorksSection>
        </Layout>
    )
}

export default Works;