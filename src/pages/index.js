import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SnsLinks from "../components/snsLinks";
import Colors from "../constants/colors";

const StyledSection = styled.section`
  display: flex;
  height: 70vh;
`;

const StyledTextContainer = styled.div`
  width: 640px;
  padding: 20px;
  margin: auto;
  font-size: 24px;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hyungjun Kim" />
      <StyledSection id="intro">
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: `center`,
            width: `100%`,
          }}
        >
          <div
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
              alignItems: `flex-end`,
              width: `560px`,
              height: `365px`,
              padding: "0 20px",
              backgroundColor: Colors.black,
              color: Colors.white,
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontSize: `64px`,
                fontWeight: `600`,
                textAlign: `right`,
              }}
            >
              HYUNGJUN
              <br />
              KIM
            </h1>
          </div>
          <div
            style={{
              width: `630px`,
              height: `365px`,
              marginLeft: `-560px`,
              marginTop: `70px`,
              top: `50px`,
              left: `0`,
              backgroundColor: Colors.shadow,
              zIndex: 1,
            }}
          ></div>
        </div>
      </StyledSection>

      <StyledSection id="about">
        <StyledTextContainer>
          <h2>Hi there, <span role="img" aria-label="smile">😄</span> <br/>I'm a Front-end developer based in Berlin.</h2>
          <p>I've been working in the web development industry for 6 years and I'm still delighted to be here!</p>
          <p>After studying literature and politics, I wanted to learn more practical skills. So I jumped into software engineering and started my career at <strong>Samsung</strong> as a software engineer.</p>
          <p>To expand my horizons, I moved from Seoul to Berlin. Traveled lots of countries and learned different languages to survive in different culture. Currently, I'm working at <strong>Contorion</strong> as a Front-end developer since 2018.</p>
          <p>My journey continues because I want to discover more about the world. <span role="img" aria-label="earth">🌏</span> If you want to know more about my story, you can find me here.</p>
          <SnsLinks></SnsLinks>
        </StyledTextContainer>  
      </StyledSection>
    </Layout>
  );
};

export default IndexPage;
