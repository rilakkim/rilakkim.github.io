import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import SmallLogo from "../images/svg/small-logo.svg"

const StyledHeader = styled.header`
  position: fixed;
  background-color: white;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(1)};
`;

const Nav = styled.div`
  list-style: none;
  float: right;
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
