import React, { useEffect } from "react"
import Prism from "prismjs"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SnsLinks from "../components/snsLinks"

import ProfileImage from "../images/profile.png"

const thinkingCodingRepeat = `while (live) {
    await 🤔;
    new Code(☕️);
    😎🍷++;
}`;

const IntroSection = styled.section`
    min-width: 320px;
    margin: auto;
`;

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    margin: ${rhythm(2)};

    @media only screen and (min-width: 720px) {
        flex-direction: row;
    }
`;

const ContactSection = styled(ContentSection)`
    display: block;
    text-align: center;
`;

const IndexPage = () => {
    useEffect(() => {
        Prism.highlightAll()
    })

    return (
        <Layout>
            <SEO title="Hyungjun Kim" />
            <IntroSection>
                <div style={{ textAlign: `center`, padding: `${rhythm(2)} 0`}}>
                    <h1>Hyungjun Kim</h1>
                    <hr></hr>
                    <h3>A Front-end Developer</h3>
                </div>
                {/* <div className="code-container">
                    <div>
                        <pre>
                            <code className="language-javascript">
                                {thinkingCodingRepeat}
                            </code>
                        </pre>
                    </div>
                </div> */}
            </IntroSection>

            <ContentSection id="about">
                <img style={{ margin: "0 auto" }} src={ ProfileImage } alt="profile" width="234px" height="312px"/>
                <div style={{ margin: `${rhythm(1)}` }}>
                    <p>
                        Hello, my name is Hyungjun Kim.<br/>
                        I’m a Front-end developer based on Berlin.🐻<br/>
                    </p>
                    <p>
                        For the past 6+ years,<br/>
                        I have explored the exciting web development universe. 🚀
                    </p>
                    <p>
                        Web is not perfect, it never will be.<br/>
                        But I'm very glad to be a part of progress that make it better.
                    </p>
                </div>
            </ContentSection>

            <ContactSection id="contacts">
                <p>
                    If you want to know more about me and my experiences<br/>
                    You can find me here
                </p>
                <SnsLinks></SnsLinks>
            </ContactSection>
        </Layout>
    )
}

export default IndexPage
