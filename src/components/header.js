import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const StyledHeader = styled.header`
  position: fixed;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: ${rhythm(1)};
`;

const Nav = styled.div`
  list-style: none;
  float: right;
`;

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <Link to="/" style={{ textShadow: `none`, color: `black` }}>
            <h3 style={{ margin: 0, display: `inline` }}>{siteTitle}</h3>
        </Link>
        <Nav>
          <Link to="/" style={{ textShadow: `none`, color: `black`, marginRight: rhythm(1)}}>About</Link>
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
