import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SnsLinks from "../components/snsLinks";

import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1044px;
`;

const StyledMain = styled.main`
  font-family: Roboto Mono, sans-serif;
  height: 100%;
`;

const StyledFooter = styled.footer`
  padding: 12px;
  font-family: Rubik, sans-serif;
  text-align: center;
  color: grey;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <StyledMain>{children}</StyledMain>
        <SnsLinks></SnsLinks>
        <StyledFooter>
          © {new Date().getFullYear()}, Designed & Developed by Hyungjun Kim
        </StyledFooter>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
