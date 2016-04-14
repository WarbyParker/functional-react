import React, { PropTypes } from 'react'

const Link = ({link}) => {
  return (
    <li><a>{link}</a></li>
  )
}

Link.propTypes = {
  link: PropTypes.string.isRequired
}

const Header = ({header, links}) => {
  return (
    <header>
      <h1>{header}</h1>
      <nav>
        <ul>
          { links.map((link,i) => <Link key={i} link={link} />) }
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  header: PropTypes.string,
  links: PropTypes.array
}

export default Header
