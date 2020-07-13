import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Main = styled.main`
  padding-top: 90px;
`;

const StyledFooter = styled.footer`
  text-align: center;
  color: darkgrey;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <StyledFooter>
          <small>
            © {new Date().getFullYear()}, With special thanks to Sunjung Park<br/>
            Designed & Developed by Hyungjun Kim
          </small>
        </StyledFooter>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
