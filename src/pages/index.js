import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PicoImage from "../images/pico.png"

const StyledSection = styled.section`
  display: flex;
  min-height: 100vh;
`;

const StyledTitleContainer = styled.div`
  font-size: 2.5rem;
  font-family: Rubik, sans-serif;
  font-weight: 800;
  line-height: 1em;
  margin: auto;

  @media only screen and (min-width: 30rem) {
    font-size: 5rem;
  }
`

const StyledPhotoTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-items: center;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledProfilePhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: auto 0;
`

const StyledTextContainer = styled.div`
  flex: 1;
  max-width: 25em;
  padding: 20px;
  margin: auto;
  text-align: left;
  font-family: Roboto Mono, sans-serif;
  font-size: 24px;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hyungjun Kim" />
      <StyledSection id="intro">
        <StyledTitleContainer>
          <div>a SELF-DRIVEN</div>
          <div>CREATOR</div>
          <div>& DEVELOPER</div>
          <div>based in </div>
          <div><strike>SEOUL</strike> BERLIN</div>
        </StyledTitleContainer>
      </StyledSection>

      <StyledSection id="about">
        <StyledPhotoTextWrapper>
          <StyledProfilePhotoContainer>
            <img src={PicoImage} width="400" alt="My cat Pico"></img>
            <div style={{
              padding: '0 8px',
              textAlign: 'center',
            }}>
              <small>It's not me.<br/>But I thought you would love to see my cat.</small>
            </div>
          </StyledProfilePhotoContainer>
          <StyledTextContainer>
            <h2>Hi, there <span role="img" aria-label="Waving Hand Sign">👋</span><br/>I'm Hyungjun Kim.</h2>
            <p>I've been working in the web development industry for 6 years and I'm still delighted to be here!</p>
            <p>After studying literature and politics, I wanted to learn more practical skills. So I jumped into software engineering and started my career at <strong>Samsung</strong> as a software engineer.👨‍💻</p>
            <p>To expand my horizons, I moved from <strong>Seoul</strong> to <strong>Berlin</strong>. Traveled lots of countries and learned different languages to survive in different cultures.</p>
            <p>Currently, I'm working at <strong>Contorion</strong> as a Front-end developer since 2018.</p>
            <p>My journey continues because I want to discover more about the world. <span role="img" aria-label="earth">🌏</span></p>
          </StyledTextContainer>  
        </StyledPhotoTextWrapper>
      </StyledSection>
    </Layout>
  );
};

export default IndexPage;
