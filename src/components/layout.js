import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Main = styled.main`
  font-family: 'Alegreya Sans'
`;

const StyledFooter = styled.footer`
  padding: 12px;
  font-family: 'Alegreya Sans';
  text-align: center;
  color: grey;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Main>{children}</Main>
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
