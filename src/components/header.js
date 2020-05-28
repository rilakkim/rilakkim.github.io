import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href={props.to}>{props.children}</a>
    </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link to="/" style={{ textShadow: `none` }}>
            <h3 style={{ margin: 0, display: `inline` }}>{siteTitle}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">About</ListLink>
            <ListLink to="#works">Works</ListLink>
            <ListLink to="#contacts">Contacts</ListLink>
        </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
