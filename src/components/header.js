import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import SmallLogo from "../images/svg/small-logo.svg"

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  background-color: white;
  width: 100%;
  min-width: 320px;
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(0.25)} ${rhythm(1)};

  @media only screen and (min-width: 720px) {
    padding: ${rhythm(0.5)} ${rhythm(1)};
  }
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <Link to="/" style={{ display: `inline-block`, height: "100%" }}>
            <SmallLogo alt={siteTitle} width="40" height="40"></SmallLogo>
        </Link>
        <Nav>
          <Link to="/" style={{ textShadow: `none`, color: `black`, marginRight: rhythm(0.5)}}>About</Link>
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
