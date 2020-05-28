import React from "react"
import Work from "../components/work"
import SnsLinks from "../components/snsLinks"

import { rhythm } from "../utils/typography"
import ProfileImage from "../images/profile.png"
import LogoContorionImage from "../images/logo-contorion.png"
import LogoSdsImage from "../images/logo-sds.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const controionListItems = [`TypeScript, SCSS, Gulp, Webpack`, `Responsive design`, `Mobile performance optimization`];
const efssListItems = [`Implemented file storage UI.`, `AngularJS, React, Grunt, Gulp, Webpack.`, `Web performance optimization`];

const IndexPage = () => (
    <Layout>
        <SEO title="Hyungjun Kim" />

        <section style={{ minWidth: `700px`, margin: rhythm(2) }}>
            <div style={{ textAlign: `center`}}>
                <h1>Hyungjun Kim</h1>
            </div>
            <div style={{ textAlign: `right`}}>
                {`while (live) {\n
                    await 🤔;\n
                    new Code(☕️);\n
                    😎🍷++;\n
                 }`}
            </div>
        </section>

        <section id="about" style={{ display: `flex`, minWidth: `700px`, margin: rhythm(2) }}>
            <img src={ ProfileImage } alt="profile" width="234px" height="312px"/>
            <div style={{ marginLeft: rhythm(1) }}>
                <p>
                    Hello, my name is Hyungjun Kim.
                    I’m a frontend developer based on Berlin.
                </p>
                <p>
                    For the past few years, I have explored the chaotic but exciting web development universe.
                    I have crafted web applications using AngularJS,  Angular, ReactJS, VueJS and VanillaJS.
                </p>
                <p>
                    Web is not perfect, it never will be. But people keep challenging to make it better.
                    I'm very glad to be a part of that progress.
                </p>
            </div>
        </section>

        <section id="works" style={{ minWidth: `700px`, margin: rhythm(2) }}>
            <Work title={`Contorion`}
                  logo={LogoContorionImage}
                  timePeriod={`2018 - now`}
                  subTitle={`E-commerce for professional tools.`}
                  listItems={controionListItems}>
            </Work>
            <Work title={`EFSS`}
                  logo={LogoSdsImage}
                  timePeriod={`2014 - 2017`}
                  subTitle={`Enterprise collaboration web app.`}
                  listItems={efssListItems}>
            </Work>
        </section>

        <section id="contacts" style={{ minWidth: `700px`, margin: rhythm(2), textAlign: "center" }}>
            <p>If you want to know more about me and my experiences
                You can find me here</p>
            <SnsLinks></SnsLinks>
        </section>
  </Layout>
);

export default IndexPage
