import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import SmallLogo from "../images/svg/small-logo.svg"

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  background-color: white;
  width: 100%;
  min-width: 320px;
  max-width: 960px;
  margin: 0 auto;

  @media only screen and (min-width: 720px) {
  
  }
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title;

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <Link to="/" style={{ display: `inline-block`, height: "100%" }}>
            <SmallLogo alt={siteTitle} width="40" height="40"></SmallLogo>
        </Link>
        <Nav>
          <Link to="/" style={{ textShadow: `none`, color: `black` }}>About</Link>
          <Link to="/works/" style={{ textShadow: `none`, color: `black` }}>Works</Link>
        </Nav>
    </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
