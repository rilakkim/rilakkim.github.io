import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-top: 70px;
  max-width: 960px;
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main>{children}</main>
        <footer>
            <div style={{
                textAlign: `center`,
                color: "darkgrey",
            }}>
                © {new Date().getFullYear()}, With special thanks to Sunjung Park
                <br/>
                Designed & Developed by Hyungjun Kim
            </div>
        </footer>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
